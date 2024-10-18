import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: '400',
          fontSize: 20,
        }}>
        A premium online store for{'\n'} sporter and their stylish choice
      </Text>
      <Image source={require('../assets/image/bifour_-removebg-preview.png')}></Image>
      <Text style={{ fontWeight: '700', fontSize: 26, marginVertical: 20 }}>
        POWER BIKE SHOP
      </Text>
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          width: 300,
          height: 30,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 20,
        }}
        onPress={() => {
          navigation.navigate('screen2');
        }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Get Started</Text>
      </Pressable>
    </View>
  );
};

function screen2() {
  const [isPress, setIsPress] = useState(1);
  const data = [
    {
      id: 1,
      name: 'Pinarello',
      image: 'item_first.png',
      price: 1800,
      category:''
    },
    {
      id: 2,
      name: 'Pina moutain',
      image: 'bione-removebg-preview.png',
      price: 1700,
    },
    {
      id: 3,
      name: 'Pina bike',
      image: 'bithree_removebg-preview.png',
      price: 1500,
    },
    {
      id: 4,
      name: 'Pinarello',
      image: 'bione-removebg-preview.png',
      price: 1500,
    },
    {
      id: 5,
      name: 'Pinarello',
      image: 'bione-removebg-preview.png',
      price: 1500,
    },
  ];
  const imageMap = {
    'item_first.png': require('../assets/image/item_first.png'),
    'bione-removebg-preview.png': require('../assets/image/bione-removebg-preview.png'),
    'bithree_removebg-preview.png': require('../assets/image/bithree_removebg-preview.png'),
  }
  const render = ({ item }) => {
    return (
      <Pressable style = {{flex:1, borderWidth:1,}}>
        <Image source={imageMap[item.image]}></Image>
        <Text style = {{fontSize:20, fontWeight:'400'}}>{item.name}</Text>
        <Text>{item.price}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <Text
        style={{
          color: '#E94141',
          marginVertical: 20,
          marginLeft: 20,
          fontSize: 25,
          fontWeight: '700',
        }}>
        The world’s Best Bike
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setIsPress(1);
          }}>
          <Text
            style={isPress === 1 ? styles.TextClick : { textAlign: 'center' }}>
            All
          </Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => {
            setIsPress(2);
          }}>
          <Text
            style={isPress === 2 ? styles.TextClick : { textAlign: 'center' }}>
            RoadBike
          </Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => {
            setIsPress(3);
          }}>
          <Text
            style={isPress === 3 ? styles.TextClick : { textAlign: 'center' }}>
            Moutain
          </Text>
        </Pressable>
      </View>
      <FlatList data={data} renderItem={({ item }) => render({ item })} 
        numColumns={2}
      />
    </View>
  );
}
export default function App() {
  return (
    // <NavigationContainer independent={true}>
    //   <Stack.Navigator>
    //     <Stack.Screen name = "screen1" component = {screen1}>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="screen1"
          component={screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="screen2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btn: {
    borderRadius: 10,
    width: 80,
    height: 32,
    padding: 10,
    borderWidth: 1,
  },
  TextClick: {
    color: 'red',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
