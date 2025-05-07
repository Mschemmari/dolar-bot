import {useState, useEffect} from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3000'; // replace with your IP for real device testing
export const useRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [modifiedRates, setModifiedRates] = useState<any>(null);
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected:', socket.id);
    });

    socket.on('data-update', (incomingRates, modified) => {
      setRates(incomingRates);
      setModifiedRates(modified);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return {rates, modifiedRates};
};
