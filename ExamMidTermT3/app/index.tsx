import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screen1 from "./screen/screen1";
import screen2 from "./screen/screen2";

const Stack = createStackNavigator()
export default function app(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name = "<-" component={screen1}/>
                <Stack.Screen name="screen2" component={screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}