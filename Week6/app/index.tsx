import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderProps } from '@react-navigation/stack';
import CustomHeader from "./(tabs)/customHeader";
import home from './(tabs)/home';
import foura from './(tabs)/4a';
import fourb from './(tabs)/4b';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent ={true}>
    <Stack.Navigator
      screenOptions={{
        header: (props: StackHeaderProps) => <CustomHeader {...props} />,
      }}
    >
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="4a" component={foura} />
      <Stack.Screen name="4b" component={fourb} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}