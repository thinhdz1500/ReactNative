import container from "@/src/dependencies/dependencies";
import { Cap } from "@/src/model/cap";
import { capClient } from "@/src/networking/cap/capClient";
import React, { useEffect, useState } from "react";
import { Button, Text, View,StyleSheet, FlatList,Image, Dimensions } from "react-native";
const initcap: Cap[]=[]; 
type typeCap = Cap;

const {width} = Dimensions.get('window');
const itemWidth = (width-20)/2;

const formatPrice = (price: number | undefined): string => {
  if (price === undefined) {
    return '0đ';
  }
  const priceInVND = price * 1000;
  return priceInVND.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).replace('₫', 'đ');
}
const renderCap = ({ cap }: { cap: typeCap }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={require('../../assets/images/xa_can_cau.png')} />
      <Text style = {{fontSize:12 }} numberOfLines={2}>{cap.title}</Text>
      <View  style = {{flexDirection:"row", height:20}}>
        <Text style = {{color:'#FFD700', marginRight:5}}>★★★★☆</Text>
        <Text style = {{color:'gray', fontSize:12}}>(15)</Text>
      </View>
      <View style = {{flexDirection:"row"}}>
        <Text style = {{fontWeight:"bold"}}>{formatPrice(cap.price)}</Text>
        <Text style = {{color:'gray', fontSize:12, position:"absolute", right:60}}>-39%</Text>
      </View>
    </View>
  );
};

export default function App({navigation}:any) {
  const [cap, setCap] = useState(initcap);
  const capAPI = container.get<capClient>('capClient');

  useEffect(() => {    
    capAPI.fetchCap().then(caps => {
      setCap(caps);
    }).catch(error => {
      console.error("Error fetching caps:", error);
    });
  }, []);

  return(
    <View style = {styles.container}>
        
        
        <FlatList
          key={`flatlist-${2}-columns`}
          data={cap}
          renderItem={({ item }) => <>{renderCap({ cap: item })}</>}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  itemContainer:{
    width: itemWidth,
    padding:10,
    backgroundColor:'white',
    borderRadius:10,
    marginBottom:10
  },
  row:{
    justifyContent: "space-between"
  }
})