import { Image, TouchableOpacity, StyleSheet, ScrollView, Text, TextInput, View, FlatList } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
const Header = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ fontSize: 25, color: 'gray', marginRight: 10 }}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Electronics</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                <Feather name="shopping-cart" size={24} color="black" style={{ marginRight: 10 }} />
                <Image source={require('../Data/codicon_account.png')} />
            </View>
        </View>
    );
}
const screen2 = ({ navigation }: any) => {
    const [onPressCate, setOnPressCate] = useState(1);
    const [search, setSearch] = useState('')
    const data4 = [{
        "id": "1",
        "name": "Smart3Phone",
        "image": "1.png",
        "price": 899
    },
    {
        "id": "2",
        "name": "Smart2Phone",
        "image": "2.png",
        "price": 899
    },
    {
        "id": "3",
        "name": "Smart1Phone",
        "image": "3.png",
        "price": 789
    },
    {
        "id": "4",
        "name": "Smart4Phone",
        "image": "4.png",
        "price": 999
    }
    ]
    type initdata4 = {
        id: string,
        name: string,
        image: string,
        price: number
    }
    const imgMap: { [key: string]: any } = {
        '1.png': require('../Data/1.png'),
        '2.png': require('../Data/2.png'),
        '3.png': require('../Data/3.png'),
        '4.png': require('../Data/4.png'),

    }
    const [dataFetch, setDataFetch] = useState<initdata4[]>()
    useEffect(()=>{
        fetch('https://66fa8b58afc569e13a9c2ad1.mockapi.io/apilab6/items/cap')
        .then(response=> response.json())
        .then(json=>setDataFetch(json))
        .catch(error => console.error("error fetching data "+error)
        )
        console.log(dataFetch);
        
    },[])
    const render = ({ item }: { item: initdata4 }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginBottom: 10, borderWidth: 1, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image source={imgMap[item.image]} />
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ marginBottom: 5, fontWeight: '500', }}>{item.name}</Text>
                        <Image source={require('../Data/Rating 5.png')} />
                    </View>
                </View>

                <View>
                    <Text style={{ marginBottom: 5, fontWeight: '700' }}>${item.price}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, margin: 20 }}>
            <Header navigation={navigation} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 10, borderWidth: 1, borderColor: 'gray', flexDirection: 'row', height: 40, width: '80%', marginRight: 10 }}>
                    <Image source={require('../Data/search.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                    <TextInput
                        placeholder="Search"
                        style={{ color: 'gray', width: '100%', outline: 'none' }}
                        value={search}
                        onChangeText={(text)=> setSearch(text)}
                   />
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: '#dee1e5', marginLeft: 20, padding: 5 }}>
                    <Ionicons name="filter" size={24} color="black" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginRight: 40 }}>
                <Text style={{ fontWeight: '700', fontSize: 20 }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '100' }}>See all {">"}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 220 }}>
                <ScrollView horizontal={true} style={{ marginTop: 20, marginBottom: 30 }}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setOnPressCate(1)
                        }}
                        style={{ height: '30%' }}
                    >
                        <Image style={[onPressCate === 1 ? styles.btnOnPressCate : styles.btnCate, { backgroundColor: '#D9CBF6' }]}
                            source={require('../Data/smart.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setOnPressCate(2)
                        }}
                        style={{ height: '30%' }}
                    >
                        <Image style={[onPressCate === 2 ? styles.btnOnPressCate : styles.btnCate, { backgroundColor: '#C5D1F7' }]}
                            source={require('../Data/ipad.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setOnPressCate(3)
                        }}
                        style={{ height: '30%' }}
                    >
                        <Image style={[onPressCate === 3 ? styles.btnOnPressCate : styles.btnCate, { backgroundColor: '#F9D8C0', marginRight: -20 }]}
                            source={require('../Data/macbook.png')}></Image>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
                <TouchableOpacity>
                    <Text>Best Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Popular</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dataFetch}
                    renderItem={({ item }: { item: initdata4 }) => {
                        if (search === '') 
                            { return render({ item }) }
                        else if (item.name.toLocaleLowerCase().includes(search))
                            { return render({ item }) }
                        else return undefined
                    }
                    }
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    horizontal={false} //sẽ hiển thị các item theo chiều ngang thay vì chiều dọc.
                    numColumns={1} //Số cột mà bạn muốn hiển thị trong danh sách. Sử dụng thuộc tính này để tạo lưới.
                // onEndReached={() => loadMoreData()}  Hàm được gọi khi người dùng cuộn đến cuối danh sách. Thường được sử dụng để tải thêm dữ liệu.
                // contentContainerStyle={{ padding: 10 }} Thuộc tính để áp dụng các kiểu cho container chứa các item trong FlatList. 
                // ListHeaderComponent={<Text>Header</Text>} //Mô tả: Một component sẽ được render ở đầu danh sách.
                // ListFooterComponent={<Text>Footer</Text>} Một component sẽ được render ở cuối danh sách.
                />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    btnCate: {
        padding: 80, borderRadius: 10, marginRight: 40
    },
    btnOnPressCate: {
        padding: 80, borderWidth: 1, borderRadius: 10, marginRight: 40,

    },
});
export default screen2