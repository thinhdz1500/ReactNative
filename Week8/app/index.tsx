import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import screen1 from "./screen/screen1";
const Stack = createStackNavigator();
export default function HomeScreen() {
    return(
        <NavigationContainer independent={true} >
            <Stack.Navigator >
                <Stack.Screen name = "screen1" component={screen1}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}