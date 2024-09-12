import { Image, StyleSheet, Platform, View,Text, Button, Pressable } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import home from './home';
import login from './login';
import sigup from './sigup';
import forgetPass from './forgetPass'
const Stack= createStackNavigator();
export default function HomeScreen() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} /> 
        <Stack.Screen name = "login" component = {login}/> 
        <Stack.Screen name="sigup" component={ sigup} />
        <Stack.Screen name="forget" component={forgetPass} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


