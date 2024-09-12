import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#CDF3F6",
        width: "100%",
        height: "100%",
        padding: 25,
      }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="lock-closed-outline" size={130} />
        <Text style={[styles.text, styles.textTitle]}>
          FORGET {"\n"} PASSWORD
        </Text>
      </View>
      <View style={{ ...styles.text, flex: 1 }}>
        <Text style={{ ...styles.text, fontSize: 15 }}>
          Provide your account’s email for which you{"\n"} want to reset your
          password
        </Text>
        <View style={{...styles.input,flexDirection:"row",alignItems:"center",marginTop:30,width:'100%'}}>
            <Ionicons name="mail-outline" size={20} style = {{marginRight:20}} />
          <TextInput placeholder="Email"  style={{width:'100%', height:'100%'}}/>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginTop:-50
        }}
      >
        <Pressable
          style={[styles.button, styles.text]}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>NEXT</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, margin: -25 }}>
        <LinearGradient
          style={{ ...styles.gradient }}
          colors={["#CDF3F6", "#0ACDF8"]}
        >
          {/* <Text style={[styles.textTitle, styles.text]}>HOW WE WORK?</Text> */}
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: "#E3C000",
    padding: 10,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
  input: {
    width: 420,
    height: 45,
    padding: 10,
    backgroundColor: "#CAE1D1",
    marginBottom: 15,
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
});
