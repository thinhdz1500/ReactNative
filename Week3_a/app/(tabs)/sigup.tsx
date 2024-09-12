import { Link } from "expo-router/build/link/Link";
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
import { Ionicons } from "@expo/vector-icons";
export default function HomeScreen() {
  const newLocal = "text";
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D8EFDF",
        width: "100%",
        height: "100%",
        padding: 25,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.text, styles.textTitle]}>REGISTER</Text>
      </View>
      <View style={{ flex: 3.5 }}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Phone" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
       
        <View>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
        </View>
        <TextInput placeholder="Birthday" style={styles.input} />
        <View style={{ flexDirection: "row" }}>
          <label style={{display:"flex", marginRight:40}}>
            <input
              type="radio"
              name="gender"
              value="male"
              style={{ width: 20, height: 18, borderWidth: 2 , marginRight:15}}
            />
             <Text style = {{fontSize: 18, fontFamily:'Roboto'}}>Male</Text>
          </label>
          <label style={{display:"flex"}}>
            <input
              type="radio"
              name="gender"
              value={"female"}
              style={{ width: 20, height: 18, borderWidth: 2,  marginRight:15}}

            />
            <Text style = {{fontSize: 18,fontFamily:'Roboto',}}>Female</Text>
          </label>
        </View>
      </View>
      <View style={{ flex: 1,flexDirection:"column", justifyContent:"center"}}>
        <Pressable style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            REGISTER
          </Text>
        </Pressable>
      </View>
      <View style={{ ...styles.text, flex: 1 }}>
        <Text style={{ margin: 10 }}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    justifyContent: "flex-start",
    alignItems: "center",
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
