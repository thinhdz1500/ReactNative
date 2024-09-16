import { Image, StyleSheet, Platform, View,Text, Button, Pressable } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import home from './home';
// import login from './login';
// import sigup from './sigup';
// import forgetPass from './forgetPass';
import cart from './(tabs)/tiktokCart';
const Stack= createStackNavigator();
export default function HomeScreen() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
      {/* <Stack.Screen name="passwordGenerator" component={passwordGenerator} />  */}
        {/* <Stack.Screen name="home" component={home} /> 
        <Stack.Screen name = "login" component = {login}/> 
        <Stack.Screen name="sigup" component={ sigup} />
        <Stack.Screen name="forget" component={forgetPass} /> */}
        <Stack.Screen name="cart" component={cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


