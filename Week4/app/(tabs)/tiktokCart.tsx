import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  Pressable,
  TextInput,
} from "react-native";

export default function App() {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(141.800);
    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'decimal',
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        }).format(value);
      };
  return (

    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, flexDirection: "row" }}
        >
          <View style={{ flex: 1 }}>
            <Image source={require("../../assets/images/book.png")}></Image>
          </View>
          <View style={{ flex: 2, marginLeft: 20 }}>
            <Text style={{ ...styles.text }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              Cung cấp bởi Tiki \Trading
            </Text>
            <Text
              style={{
                ...styles.text,
                fontSize: 18,
                fontWeight: 700,
                color: "red",
                marginTop: 15,
                marginLeft: 5,
              }}
            >
              141.800 đ
            </Text>

            <Text
              style={{
                ...styles.text,
                fontSize: 10,
                fontWeight: 700,
                color: "",
                marginTop: 15,
                marginLeft: 5,
                textDecorationLine: "line-through",
              }}
            >
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "40%",
                  height: "100%",
                  justifyContent: "space-around",
                  marginLeft: -20,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#808080",
                    width: 15,
                    height: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setCount(count - 1);
                    setPrice(price - 141.800);
                  }}
                >
                  <Text>-</Text>
                </Pressable>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    justifyContent: "center",
                  }}
                >
                  {count}
                </Text>
                <Pressable
                  style={{
                    backgroundColor: "#808080",
                    width: 15,
                    height: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {setCount(count + 1);setPrice(price + 141.800)}}
                >
                  <Text>+</Text>
                </Pressable>
              </View>
              <View style={{ width: "60%", alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: "#134FEC",
                    fontSize: 12,
                  }}
                >
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1,  }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 10
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 12 }}>Mã giảm giá đã lưu</Text>
            </View>
            <View>
              <Text
                style={{ fontFamily: "Roboto", color: "#134FEC", fontSize: 12 }}
              >
                Xem tại đây
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 20,
            }}
          >
            <View style = {{flex:2, flexDirection:"row",alignItems:"center", borderWidth:3, borderColor:'#14AE5C',height:45,justifyContent:"center",marginRight:20}}>
                <View style={{backgroundColor:'#F2DD1B',width:32,height:16, alignItems:"flex-start", marginLeft:-50, marginRight:10}}></View>
                <View>
                <Text style ={{fontSize: 18,fontWeight:"bold"}}>Mã giảm giá</Text>
                </View>
            </View>
            <View style = {{flex:1, backgroundColor:'#0A5EB7', height:45, marginRight:10,justifyContent:"center", alignItems:"center"}}>
              <Pressable>
                <Text style ={{color: 'white', fontSize:20,fontWeight:'bold'}}>Áp dụng</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style ={{flex:1,flexDirection: "row"}}>
            <View>
                <Text style={{fontSize:12, fontWeight:700, marginRight:10}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            </View>
            <View>
                <Text style={{fontSize:12, fontWeight:700, color:'#134FEC'}}>Nhập tại đây?</Text>
            </View>
        </View>
        
        <View style ={{flex:3,}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                        <Text style={{fontSize:18, fontWeight:700}} >Tạm tính</Text>
                </View>
                <View>
                        <Text style={{fontSize:18, fontWeight:700,color:'red'}}>{formatPrice(price)} đ</Text>
                </View>
            </View>
        </View>
        <View style ={{flex:2}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                            <Text style={{fontSize:18, fontWeight:700,color:'#808080'}} >Thành tiền</Text>
                    </View>
                    <View>
                            <Text style={{fontSize:18, fontWeight:700,color:'red'}}>{formatPrice(price)} đ</Text>
                    </View>
            </View>
            <View style ={{backgroundColor:'red',height:45, justifyContent:'center', alignItems:'center', marginTop:15}}>
                <Pressable>
                    <Text style = {{fontSize:20, fontWeight:700,color:'white'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </Pressable>
            </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "bold",
  },
  input: {
    width: 420,
    height: 45,
    padding: 10,
    backgroundColor: "#CAE1D1",
    marginBottom: 15,
  },
  button: {
    width: 420,
    height: 40,
    backgroundColor: "#C34E3B",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
  },
  textTitle: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  buttonLogo: {
    width: 110,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
