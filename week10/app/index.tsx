
import NoteApp from "./(tabs)/noteApp";
import UpdateNote from "./(tabs)/updateNote";
import EnterEmail from "./(tabs)/Screen1";
import Header from "./(tabs)/Header"
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import App from "./presentation/Saga Redux/app";
import { Provider } from "react-redux";
import store from "./presentation/Saga Redux/store";
const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="enterEmail">
          <Stack.Screen name="enterEmail" component={EnterEmail}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="noteApp" component={NoteApp}
            options={({ navigation, route }) => ({
              header: () => <Header navigation={navigation} route={route} />
            })}
          />
          <Stack.Screen name="updateNote" component={UpdateNote}
            options={({ navigation, route }) => ({
              header: () => <Header navigation={navigation} route={route} />
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <App/>
  );
}