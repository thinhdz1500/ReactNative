import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest } from "../presentation/Saga Redux/actions";
type initNote = {
    id: string,
    email: string,
    title: string,
    note: string,
}

const EnterEmail = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector(state => state.todos);
    const [notes, setNote] = useState<initNote[]>([])
    // useEffect(() => {
    //     fetch('https://66ff350c2b9aac9c997e843e.mockapi.io/note')
    //         .then(response => response.json())
    //         .then(json => { setNote(json) })
    //         .catch(error => {
    //             console.error("error fetching data: ", error);
    //         })
    // },[])
    useEffect(() => {
        dispatch(fetchTodosRequest());
    }, [dispatch]);
    useEffect(() => {
         setNote(todos); 
        }, [todos]);
    const login = () => {
        notes.forEach((e) => {
            e.email === email ? (navigation.navigate('noteApp', { email: email }), setErrorMessage('')) : setErrorMessage('email không tồn tại')
        })
    }
    console.log(notes);
    console.log("State: " + todos);

    return (<>
        <View style={{ flex: 1, height: '100%' }}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: '50%' }}>
                <Text style={{ textAlign: 'center', color: '#8353E2' }}>
                    MANAGE YOUR{'\n'}TASK
                </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 30 }}>
                <TextInput
                    placeholder="Enter your name"
                    onChangeText={(text) => { setEmail(text) }}
                    style={{ width: 334, height: 43, borderWidth: 1, borderRadius: 10, textAlign: 'center' }}
                />
            </View>
            {
                errorMessage ? (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</Text>
                    </View>
                ) : null
            }
            <View style={{ alignItems: 'center' }}>
                <Pressable style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, width: 190, height: 44, backgroundColor: '#00BDD6' }}
                    onPress={login}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>GET STARTED -{'>'}</Text>
                </Pressable>
            </View>

        </View>
    </>);
}
export default EnterEmail;