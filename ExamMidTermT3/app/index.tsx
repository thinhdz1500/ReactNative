import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import screen1 from "./screen/screen1";
import screen2 from "./screen/screen2";
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ }) => {
                    let image;

                    if (route.name === 'Homee') {
                        image = require(`../app/Data/clarity_home-solid.png`);
                    } 

                    return <Image source={image} />;
                },
                tabBarActiveTintColor: 'cyan',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Homee" component={screen2} options={{ headerShown: false }}/>
            <Tab.Screen name="Search" component={screen1} />
            <Tab.Screen name="Favorites" component={screen1} />
            <Tab.Screen name="Inbox" component={screen1} />
            <Tab.Screen name="Account" component={screen1} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Screen1" component={screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
