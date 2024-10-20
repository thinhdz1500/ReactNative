import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { createContext } from "react";
import screen1 from "./screen/screen1";
import Detail from "./screen/detail";

const Stack = createStackNavigator();

const imageMap = {
  'donut_red.png': require('../assets/images/donut_red.png'),
  'donut_yellow.png': require('../assets/images/donut_yellow.png'),
  'green_donut.png': require('../assets/images/green_donut.png'),
  'tasty_donut.png': require('../assets/images/tasty_donut.png'),
};
type ImageMapType = typeof imageMap;
const ImageContext = createContext<ImageMapType | undefined>(undefined);
export {ImageContext}
export default function HomeScreen() {
  return (
    <ImageContext.Provider value={imageMap}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={screen1} 
            options={{headerShown:false}}
/>
          <Stack.Screen name = "detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ImageContext.Provider>
  );
}
