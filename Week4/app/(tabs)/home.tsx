import { Image, StyleSheet, Platform, View,Text, Button, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
export default function Home({navigation}: {navigation: NavigationProp<any>}) {
  return (
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
        <Pressable style={{width:100, height:50, backgroundColor:'pink', justifyContent:'center',alignItems:'center'}}
        onPress={()=>navigation.navigate('cart')}
        >
            <Text style={{fontWeight:'900'}}>TikTokOK</Text>
        </Pressable>
        <Pressable style={{width:100, height:50, backgroundColor:'pink', justifyContent:'center',alignItems:'center'}}
        onPress={()=>navigation.navigate('password')}
        >
            <Text style={{fontWeight:'900'}}>2C</Text>
        </Pressable>
    </View>
  );
}