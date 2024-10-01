import React from "react";
import { Button,View } from "react-native";
export default function home({navigation}:any){
    return(
        <View><Button 
        title="4a"
        onPress={()=>{
            navigation.navigate('4a')
        }}
        />
        <Button 
        title="4b"
        onPress={()=>{
            navigation.navigate('4b')
        }}
        /></View>
    );
}