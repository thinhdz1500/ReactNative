import { useState } from "react";
import { View,Text, StyleSheet,TextInput, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Password() {
  const [password, setPassword] = useState('');
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpcase, setIsUpcase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const checkPassword = (input:string) => {
    setPassword(input);
    setIsLowerCase(/[a-z]/.test(input));
    setIsUpcase(/[A-Z]/.test(input));
    setIsNumber(/[0-9]/.test(input));
    setIsSpecial(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(input));
}
  return (
    
    <View style={{ flex: 1, backgroundColor:'#23235B', margin:20 }}>
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center',marginLeft: 10,}}>
        <Text style = {[styles.text,styles.textTitle]}>PASSWORD{'\n'}GENERATOR</Text>
      </View>
      <View style={{ flex: 1,marginLeft: 10 }}>
        <TextInput placeholder="enter the password" placeholderTextColor={'gray'} style = {{...styles.input,color:'white'}}
          value={password} onChangeText={checkPassword}
         />
      </View>
      <View style={{ flex: 2,marginLeft: 10, }}>
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
            <Text style={{...styles.text, height:24}}>Password length</Text>
            <Text style={{...styles.text,width:118, height:33, marginRight:10,backgroundColor:'white'}}>{password.length}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center", marginTop:20}}>
            <Text style={{...styles.text, height:24}}>Include lower case letters</Text>
            <TouchableOpacity style={{...styles.touchable}}

            >
                  <Text style={styles.textOk} >{isLowerCase ? '✔' : ''}</Text>
            </TouchableOpacity>
           
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center", marginTop:20}}>
            <Text style={{...styles.text, height:24}}>Include upcase letters</Text>
            <TouchableOpacity style={{...styles.touchable}}>
                 <Text style={styles.textOk}>{isUpcase ? '✔' : ''}</Text>

            </TouchableOpacity>
           
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center", marginTop:20}}>
            <Text style={{...styles.text, height:24}}>Include number</Text>
            <TouchableOpacity style={{...styles.touchable}}>
                 <Text style={styles.textOk}>{isNumber ? '✔' : ''}</Text>
            </TouchableOpacity>
           
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center", marginTop:20}}>
            <Text style={{...styles.text, height:24}}>Include special symbol</Text>
            <TouchableOpacity style={{...styles.touchable}}>
                  <Text style={styles.textOk}>{isSpecial ? '✔' : ''}</Text>  
            </TouchableOpacity>
           
        </View>
      </View>
      <View style={{ flex: 1, alignItems:"center"}}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>GENERATE PASSWORD </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color:'black',
      fontSize:15
    },
    textOk:{
      color:'white',
      textAlign:'center',
    }
    ,
    touchable:{
        width:25,
        height:25,
        borderWidth:2,
        borderColor:'white',
        marginRight:10,
        backgroundColor: 'White'
    },
    input:{

      width: 297,
      height:40,
      padding: 10,
      backgroundColor:'#151537',
      marginBottom:15,
    },
    button:{
      width:259,
      height:55,
      backgroundColor:'#3B3B98',
      justifyContent: 'center',
      alignItems: 'center',
      color:'white',
    },
    textTitle: {
      fontSize: 25,
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },
    buttonLogo:{
      width:110,
      height:45,
      alignItems: 'center',
      justifyContent:'center'
    }
  });
