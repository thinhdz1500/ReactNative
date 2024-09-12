import { Link } from 'expo-router/build/link/Link';
import { Image, StyleSheet, Platform, View,Text, Button, Pressable, TextInput } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';


export default function HomeScreen() {
    const newLocal = "text";
  return (
    <View style={{flex: 1, backgroundColor: '#D8EFDF',width: '100%', height: '100%', padding:25}}>
      <View style = {{flex: 1}}>
        <Text style = {[styles.text,styles.textTitle]}>LOGIN</Text>
      </View>
    <View style = {{flex:1.5}}>
      <TextInput placeholder="Email" style= {styles.input}/>
      <TextInput placeholder="Password" style= {styles.input} secureTextEntry={true}/>
    </View>
      <View style = {{flex:0.5}}>
        <Pressable style = {styles.button} >
          <Text style = {{fontSize:20,fontWeight:'bold', color: 'white'}}>LOGIN</Text>
        </Pressable>
      </View>
      <View style = {{...styles.text,flex:2}}>
        <Text style = {{margin: 10}}>When you agree to terms and conditions</Text>
        <Link href={'/'} style = {{margin: 10,color:'blue'}}>For got your password?</Link>
        <Text style = {{margin: 10}}>Or login with</Text>
      </View>
      <View style = {{flex:1, flexDirection:'row',justifyContent:'center'}}>
        <View style = {{...styles.buttonLogo, backgroundColor:'#275A8E'}}><Text style = {{ color:'white',fontSize:30}}>f</Text></View>
        <View style = {{...styles.buttonLogo, backgroundColor:'#1593C6'}}><Text style = {{ color:'white',fontSize:30}}>Z</Text></View>
        <View style = {{...styles.buttonLogo,borderColor: '#0680F1',borderWidth:1}}>
            <Image source={require('../../assets/images/gg.webp')} style= {{width:35,height:35}}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input:{
    width: 420,
    height:45,
    padding: 10,
    backgroundColor:'#CAE1D1',
    marginBottom:15,
  },
  button:{
    width:420,
    height:40,
    backgroundColor:'#C34E3B',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#ffffff',
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
