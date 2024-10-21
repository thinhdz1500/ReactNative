import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";


const screen1 = ({navigation}:any) => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const account = [
        {
            email:'email1',
            password:'sa'
        },
        {
            email:'email2',
            password:'sa'
        },
    ]
    return (

        <View style={{ flex: 1,marginHorizontal:50 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                <Image source={require('../Data/icon.png')}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}>Hello Again!</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '100', color: 'gray' }}>Log into your account</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ borderWidth: 1, height: 50, width: '100%', borderRadius: 20, borderColor: 'gray', marginTop: 50, flexDirection: 'row' }}>
                    <Image source={require('../Data/Vector.png')} style={{ marginTop: 15, marginHorizontal: 20 }} />
                    <TextInput style={{ height: '100%', width: '100%', borderWidth: 0, outline: 'none' }}
                        placeholder="Enter your emain address"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={{ borderWidth: 1, height: 50, width: '100%', borderRadius: 20, borderColor: 'gray', flexDirection: 'row', marginTop: 30 }}>
                    <Image source={require('../Data/Vector.png')} style={{ marginTop: 15, marginHorizontal: 20 }} />
                    <TextInput style={{ height: '100%', width: '100%', borderWidth: 0, outline: 'none' }}
                        placeholder="Enter your emain password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
            </View>
            <View style = {{alignItems:'flex-end', marginTop:20}}>
                <Text style ={{color:'#00BDD6'}}>Forget password</Text>
            </View>
            <View style = {{alignItems:'center',justifyContent:'center',marginTop:20, borderWidth:1, borderRadius:20, height:50, backgroundColor:'#00BDD6'}}>
                <Pressable
                    onPress={()=>{
                        account.map(data =>{
                            data.email === email && data.password === password? navigation.navigate('screen2'):null
                        })
                    }}
                >
                    <Text style = {{color:'white',fontSize:15}}>Continue</Text>
                </Pressable>
            </View>

            <View style = {{marginTop:50,marginBottom:30, flexDirection:'row',alignItems:'center'}}>
                <View style = {{flex:1, height:1,backgroundColor:'lightgray',marginRight:10}}></View>
                <Text style = {{color:'gray'}}>or</Text>
                <View style = {{flex:1, height:1,backgroundColor:'lightgray',marginLeft:10}}></View>
            </View>

            <View style = {{flexDirection:'row', justifyContent:'center'}}>
                <Image source={require('../Data/google.png')} style = {{marginRight:10}}/>
                <Image source={require('../Data/face.png')} style = {{marginRight:10}}/>
                <Image source={require('../Data/apple.png')} style = {{marginRight:10}}/>
            </View>
        </View>
    );
}
export default screen1