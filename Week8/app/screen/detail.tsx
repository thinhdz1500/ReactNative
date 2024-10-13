import { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageContext } from "../index";
import EvilIcons from '@expo/vector-icons/EvilIcons';
const Detail = ({ navigation, route }: any) => {
    const { item } = route.params;
    const imageMap = useContext(ImageContext)
    const [quantity, setQuantity] = useState(1)
    return (
        <View style={{ flex: 1 }}>
            <Image source={imageMap[item.img]} resizeMode="cover" style={{ width: '100%', height: 278 }}></Image>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: '700', fontSize: 20, marginTop: 10 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: '700', fontSize: 12, color: '#0000008A', marginVertical: 10 }}>{item.description}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>${item.price}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <EvilIcons name="clock" size={24} color="black" style={{ marginRight: 5 }} />
                            <Text style={{ fontWeight: '700', fontSize: 12, color: '#0000008A', marginTop: 2 }}>Delivery in</Text>
                        </View>
                        <Text style={{ fontWeight: '700', fontSize: 20, marginTop: 10 }}>30 Min</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginRight: 10, height: 20, width: 20, borderWidth: 1, borderRadius: 5, backgroundColor: '#F1B000' }}
                            onPress={() => {
                                setQuantity(quantity === 1 ? quantity : quantity - 1)
                            }}
                        >
                            <Text style={{ fontSize: 15, alignItems: 'center', textAlign: 'center', }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: '700' }}>{quantity}</Text>
                        <TouchableOpacity style={{ marginLeft: 10, height: 20, width: 20, borderWidth: 1, borderRadius: 5, backgroundColor: '#F1B000' }}
                            onPress={() => {
                                setQuantity(quantity + 1)
                            }}
                        >
                            <Text style={{ fontSize: 15, alignItems: 'center', textAlign: 'center', }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontWeight: '700', fontSize: 20, marginVertical: 10 }}>Restaurants info</Text>
                <Text>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'gray', width: '100%', height: 50, marginTop: 20, backgroundColor: '#F1B000' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:7 }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Add to cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Detail