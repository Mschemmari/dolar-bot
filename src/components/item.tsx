import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemProps {
  data: {
    name: string;
    buyValue: number;
    sellValue: number;
  };
}

const Item: React.FC<ItemProps> = ({ data }) => {
  console.log('Item data:', data.buyValue);
  // const {name, buyValue ,sellValue} = data;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text numberOfLines={1} style={styles.name}>
          {data.name}
        </Text>
        <View>
          <Text style={styles.operation}>Compra</Text>
          <Text style={styles.exchangeRate}>${data.buyValue}</Text>
        </View>
        <View>
          <Text style={styles.operation}>Venta</Text>
          <Text style={styles.exchangeRate}>${data.sellValue}</Text>
        </View>
      </View>
      {/* <Text style={styles.updated}>{formatDate(data.fechaActualizacion)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#374151',
    marginVertical: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#374151',
  },
  name: {
    fontSize: 20,
    color: 'white',
    width: 150,
  },
  operation: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  },
  exchangeRate: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  updated: {
    fontSize: 11,
    color: 'gray',
    textAlign: 'left',
  },
});

export default Item;
