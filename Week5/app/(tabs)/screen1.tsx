import {
  Image,
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, useRoute } from "@react-navigation/native";
export default function screen1({ navigation }: any) {
  const route = useRoute();
  const { selectedColor } = route.params || {
    selectedColor: {
      color: 'red',
      provider: 'Tiki Trading',
      price: 1790000,
      image:require("../../assets/images/vs_red.png")
    }
  };
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.img}
          source={selectedColor.image}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ ...styles.text }}>
              Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.startCompo}>
              <Image source={require("../../assets/images/star.png")} />
              <Image source={require("../../assets/images/star.png")} />
              <Image source={require("../../assets/images/star.png")} />
              <Image source={require("../../assets/images/star.png")} />
              <Image source={require("../../assets/images/star.png")} />
            </View>
            <View style={{}}>
              <Text style={styles.text}>(Xem 828 đánh giá)</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ ...styles.text, fontWeight: 700, marginRight: 40 }}>
              {selectedColor.price} đ
            </Text>
            <Text
              style={{ ...styles.text, textDecorationLine: "line-through" }}
            >
              {selectedColor.price} đ
            </Text>
          </View>
          <View>
            <Text style={{ ...styles.text, fontWeight: 700, color: "#FA0000" }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("screen2")}
            >
              <Text style={{ ...styles.text, textAlign: "center", flex: 1 }}>
                4 MÀU-CHỌN MÀU
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Pressable
            style={{
              borderWidth: 1,
              backgroundColor: "red",
              width: "100%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ ...styles.text, fontSize: 20, color: "white" }}>
              CHỌN MUA
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 301,
    height: 361,
  },
  text: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  startCompo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 5,
  },
});
