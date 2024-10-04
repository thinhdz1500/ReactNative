import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
type initNote = {
    id: String,
    email: String,
    title: String,
    note: String,
}
const deleteNote = async (id: string) => {
    try {
        const response = await fetch(`https://66ff350c2b9aac9c997e843e.mockapi.io/note/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            console.log("delete ok");
        }
        else {
            console.error("error delete data: ", response.status);
        }
    } catch (error) {

    }
}
const Item = ({ item }: {item:initNote}) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 1, width: 335, height: 48, backgroundColor: "#edeff2", borderRadius: 20, padding: 10 }}>
                <AntDesign name="checkcircleo" size={20} color="#4AA56A" />
                <Text style={{ flex: 1, marginLeft: 20 }}>{item.title}</Text>
                <Pressable>
                    <EvilIcons name="pencil" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>deleteNote(item.id.toString())}>
                    <EvilIcons name="trash" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}
export default function NoteApp() {
    const [notes, setNotes] = useState<initNote[]>([]);
    useEffect(() => {
        fetch('https://66ff350c2b9aac9c997e843e.mockapi.io/note')
            .then(response => response.json())
            .then(json => { setNotes(json) })
            .catch(error => {
                console.error("error fetching data: ", error);
            })
    }, [notes])
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flexDirection: 'row', borderWidth: 1, width: '100%', height: 44, borderRadius: 10, padding: 10, marginBottom: 30 }}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput placeholder="Search" style={{ marginLeft: 10, width:'100%', }} />
            </View>
            <FlatList
                data={notes}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item)=>item.id.toString()}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ width: 49, height: 49, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#26C3D9' }}>
                    <Text style={{ fontSize: 22, color: 'white' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}