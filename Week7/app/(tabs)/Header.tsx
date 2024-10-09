import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation,route }:{navigation:any,route:any}) => {
    const {email}:{email?:string} = route.params
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://example.com/your-profile-image.jpg' }} // Thay đổi URL thành hình ảnh của bạn
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.greetingText}>Hi {email}</Text>
                    <Text style={styles.subGreetingText}>Have a great day ahead</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff', // Màu nền của header
        elevation: 2, // Đổ bóng cho header
    },
    backButton: {
        marginRight: 10, // Khoảng cách giữa nút quay lại và profile
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // Để tạo hình tròn
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subGreetingText: {
        fontSize: 12,
        color: '#888', // Màu chữ nhạt hơn
    },
});

export default Header;