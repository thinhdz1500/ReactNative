import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
type initNote = {
    id: string,
    email: string,
    title: string,
    note: string,
}
const UpdateNote = ({ navigation, route }: { navigation: any; route: any }) => {
    const { item,isNewNote,email,refresh }: { item?: initNote, isNewNote?:Boolean,email?:string,refresh?:boolean } = route.params;
    const [title, setTitle] = useState<string>(isNewNote?'': item!.title ||'');
    // const [email, setEmail] = useState<string>(isNewNote?'':item!.email ||'');
    // const [editingNote, setEditingNote] = useState<initNote | null>(null);
    const [note, setNote] = useState<string>(isNewNote?'':item!.note ||'');
    const saveNote = async () => {
        try {
            const data = isNewNote?{title: title, note: note, email:email }:{...item, title:title, note:note, email:email}
            const response = await fetch(`https://66ff350c2b9aac9c997e843e.mockapi.io/note/${isNewNote ? '' : item?.id}`, {
                method: isNewNote?'POST': 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log('email in update '+email);
                navigation.navigate('noteApp',{email,refresh:!refresh} );
            }
            else {
                console.log("update error: ", response.status);
            }
        }
        catch (error) {
            console.log("error update data: ", error);
        }
    }
    return (
        <View>
            <TextInput
                value={title}
                onChangeText={(text) => {
                    setTitle(text)
                }}
                style={{ fontSize: 32, fontWeight: 700, justifyContent: "center", alignItems: "center", textAlign: "center" }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                <TextInput

                    value={note}
                    onChangeText={(text) => {
                        setNote(text)
                    }}
                    style={{ width: 334, borderWidth: 1, height: 44, }}
                />
            </View>
            <View style = {{alignItems: "center", justifyContent: 'center'}}>
                <Pressable onPress={saveNote}
                    style={{ width: 190, height: 44, backgroundColor: '#26C3D9' }}
                >
                    <View style = {{alignItems: "center", justifyContent: 'center'}}>
                    <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Finish -{'>'}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default UpdateNote;