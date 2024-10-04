import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderProps } from '@react-navigation/stack';
import CustomHeader from "./(tabs)/customHeader";
import Home from './(tabs)/home';
import Foura from './(tabs)/4a';
import Fourb from './(tabs)/4b';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent ={true}>
    <Stack.Navigator
      screenOptions={{
        header: (props: StackHeaderProps) => <CustomHeader {...props} />,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="4a" component={Foura} />
      <Stack.Screen name="4b" component={Fourb} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}