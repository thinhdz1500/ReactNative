import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

type ItemData = {
  id: number;
  name: string;
  shop: string;
  img: string;
};

const Item = ({item}: {item: ItemData}) => (
  <View style={styles.item}>
    <Image source={require('../../assets/images/xa_can_cau.png')}/>
    <View style={{}}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.titleShop}>Shop {item.shop}</Text>
    </View>
    <View style = {{justifyContent:'center'}}>
    <TouchableOpacity style={styles.btn}>
      <Text style = {{color:'white'}}>Chat</Text>
    </TouchableOpacity>
    </View>
  </View>
);

export default function App({navigation}:any) {
  const [items, setItems] = useState<ItemData[]>([]);

  useEffect(() => {
    fetch('https://66fa8b58afc569e13a9c2ad1.mockapi.io/apilab6/items/items')
      .then(response => response.json())
      .then(json => setItems(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{margin:10}}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ebedf0',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#e0e0de'
  },
  title: {
    fontSize: 12,
  },
  titleShop: {
    fontSize: 12,
    color:'red'
  },
  btn:{
    backgroundColor:'red',
    flexDirection:'column',
    width:88,
    height:38,
    justifyContent:'center',
    alignItems:'center',
  }
});