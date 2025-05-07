import React from 'react';
import {VirtualizedList} from 'react-native';
import Item from './item';

export type Rate = {
  moneda: string;
  casa: string;
  name: string;
  buyValue: number;
  sellValue: number;
  fechaActualizacion: string;
};


const ItemComponent = ({data}: {data: Rate[]}) => {
  console.log('ItemComponent dataaaaa:', data);
  return (
    <>
      {data && (
        <VirtualizedList
          data={data}
          // initialNumToRender={4}
          renderItem={({item}: {item: Rate}) =>
           item.previousValue 
            ? <Item data={{ name: item.previousValue.name, buyValue: item.previousValue.buyValue, sellValue: item.previousValue.sellValue }} />// console.log(Object.values(item))
           : <Item data={{ name: item.name, buyValue: item.buyValue, sellValue: item.sellValue }} />}
          keyExtractor={(item, i: number) => item.name + i}
          getItemCount={() => data.length}
          getItem={(rate, index) => rate[index]}
        />
      )}
    </>
  );
};


export default ItemComponent;
