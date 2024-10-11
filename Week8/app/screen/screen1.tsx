import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
type initFood = { id: string, name: string, price: number, description: string }
const screen1 = ({ navigation }: any) => {
    const [food, setFood] = useState<initFood[]>([])
    useEffect(() => {
        fetch('https://66ff350c2b9aac9c997e843e.mockapi.io/food')
            .then(response => response.json())
            .then(json => setFood(json))
            .catch(error => {
                console.error("error fetching data: ", error);
            })
    }, [])
    const onPress = (button: number) => {
        setIsPress(button)
    }
    const outPress = () => {
        setIsPress(0)
    }
    const [isPress, setIsPress] = useState(0);
    const render = ({ item }: { item:initFood  }) => {
        return (
            <View style = {{flexDirection:"row", }}>
                <Image style = {{width:111,height:101}}></Image>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <View>
                        <Text>{item.price}</Text>
                        <TouchableOpacity>
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
                data={food}
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
export default screen1;