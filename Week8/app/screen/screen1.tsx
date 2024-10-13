import { createContext, useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ImageContext } from "../index"
type initFood = { id: string, name: string, price: number, category: string,img:string,description: string }
const Screen1 = ({ navigation }: any) => {
    const [food, setFood] = useState<initFood[]>([])
    
    useEffect(() => {
        fetch('https://66ff350c2b9aac9c997e843e.mockapi.io/food')
            .then(response => response.json())
            .then(json => setFood(json))
            .catch(error => {
                console.error("error fetching data: ", error);
            })
    }, [])
    const [foodCategory, setFoodCategory]= useState(food)    
    const onPress = (button: number) => {
        setIsPress(button)
        if(button ===1){
            setFoodCategory(food.filter(food=> food.category.includes('donut')))
        }
        else if(button === 2){
            setFoodCategory(food.filter(food=> food.category.includes('pink donut')))
        }
        else if(button === 3){
            setFoodCategory(food.filter(food => food.category.includes('floating')))
        }
    }
    const [isPress, setIsPress] = useState(0);
    
    
    const imageMap = useContext(ImageContext)
    const render = ({ item }: { item:initFood  }) => {
        return (
            <View style = {{flexDirection:"row",marginTop:20,backgroundColor:'#F4DDDD' }}>
                <Image source={imageMap[item.img]} resizeMode="cover" style = {{height:'100%'}}></Image>
                <View style = {{paddingVertical:10, marginHorizontal:10}}>
                    <Text style={{fontWeight:'700', fontSize:20}}>{item.name}</Text>
                    <Text style = {{fontWeight:'700',fontSize:12, color:'#0000008A', marginVertical:10}}>{item.description}</Text>
                    <View style = {{flexDirection:'row',justifyContent:'space-between',width:'83%'}}>
                        <Text style = {{fontSize:20, fontWeight:'700', marginTop:10}}>${item.price}</Text>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('detail',{item});
                        }}>
                            <Image source={require('../../assets/images/plus_button.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Welcome, Thinne!</Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Choise your best Food</Text>
            <TextInput placeholder="search food" style={{ width: 266, borderWidth: 1, padding: 10, borderColor: 'gray', marginTop: 20 }} />
            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: 'space-around' }}>
                <TouchableOpacity style={isPress === 1 ? styles.buttonPress : styles.button}
                    onPress={() => onPress(1)}
                >
                    <Text>Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPress === 2 ? styles.buttonPress : styles.button}
                    onPress={() => onPress(2)}
                >
                    <Text>Pink Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPress === 3 ? styles.buttonPress : styles.button}
                    onPress={() => onPress(3)}
                >
                    <Text>Floating</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={foodCategory.length===0?food: foodCategory}
                renderItem={({ item }) => render({ item })}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 10
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "700",
    },
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 9,
        borderRadius: 5,

    },
    buttonPress: {
        backgroundColor: "#fcc203",
        borderWidth: 1,
        borderColor: 'gray',
        padding: 9,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
});
export default Screen1;