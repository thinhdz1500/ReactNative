import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import screen1 from './(tabs)/screen1';
import screen2 from './(tabs)/screen2';
const Stack= createStackNavigator();
export default function HomeScreen() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        
        <Stack.Screen name = "screen1" component = {screen1}/>
        <Stack.Screen name = "screen2" component = {screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


