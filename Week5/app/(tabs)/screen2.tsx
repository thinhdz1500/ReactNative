import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function screen2({navigation}:any) {
  const descriptions =[
    {
      image:require("../../assets/images/vs_silver.png")
    },
    {
      color:'silver',  
      provider:'Tiki Tradding',
      price: 1790000,
      image:require("../../assets/images/vs_silver.png")
    },
    {
      color:'red',  
      provider:'Tiki Tradding',
      price: 1790000,
      image:require("../../assets/images/vs_red.png")
    },
    {
      color:'black',  
      provider:'Tiki Tradding',
      price: 1790000,
      image:require("../../assets/images/vs_black.png")
    },
    {
      color:'blue',  
      provider:'Tiki Tradding',
      price: 1790000,
      image:require("../../assets/images/vs_blue.png")
    }
  ]
  const [selectedColor, setSelectedColor] = useState(descriptions[0]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Image
            source={selectedColor.image}
            style={{ width: 112, height: 132,margin:10 }}
            resizeMode="contain"
          />
        </View>
        <View style={{}}>
         
        </View>
        {selectedColor!=descriptions[0]?<View style={{flexDirection:"column"}}>
        <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>Màu: {selectedColor.color}</Text>
          <Text>Cung cấp bởi: {selectedColor.provider}</Text>
          <Text>Giá: {selectedColor.price}</Text>
        </View>:<View> <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text></View>}
      </View>
      <View style={{ flex: 3, backgroundColor: "#C4C4C4", padding: 10 }}>
        <Text>Chọn một màu bên dưới:</Text>

        <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {descriptions.map((description, index) => (
              <Pressable
                key={index}
                onPress={()=>setSelectedColor(description)}
                style={{
                  backgroundColor: description.color,
                  height: 80,
                  width: 85,
                  marginTop: 10,
                }}
              >
              </Pressable>
            ))}
        </View>
        <Pressable
          onPress={()=>{
            navigation.navigate("screen1",{selectedColor})
          }}
          style={{
            height: 55,
            borderWidth: 1,
            backgroundColor: "#4D6DC1",
            justifyContent: "center",
            borderRadius: 10,
            margin:20,
            
          }}
        >
          <Text style={{color:"white", fontSize:20, fontWeight:900, textAlign:"center"}}>Xong</Text>
        </Pressable>
      </View>
    </View>
  );
}
