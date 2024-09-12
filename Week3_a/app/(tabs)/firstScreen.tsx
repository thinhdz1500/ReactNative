import { Image, StyleSheet, Platform, View,Text, Button, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#00CCF9',width: '100%', height: '100%', padding:25}}>
      <View style= {{
        flex: 2,  justifyContent: 'center', alignItems: 'center'
      }}>
        <Image source={{uri :'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={styles.reactLogo}/>
      </View>
      <View style = {{...styles.text,flex : 1}}>
      <Text style={styles.textTitle}>GROW</Text>
      <Text style={styles.textTitle}>YOUR BUSINESS</Text>
      </View>
      <View style={{flex:1}}>
        <Text style = {styles.text}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={[styles.button, styles.text]}>
        <Pressable>
          <Text style={{fontSize:20,fontWeight:'bold'}}>LOGIN</Text>
        </Pressable>
        </View>
        <View style={[styles.button, styles.text]}> 
        <Pressable>
          <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width:119,
    height:48,
    backgroundColor:'#E3C000',
    padding: 10,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    
  },
});
