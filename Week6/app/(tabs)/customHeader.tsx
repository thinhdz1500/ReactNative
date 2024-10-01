import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ navigation }:any) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput 
          placeholder="Dây cáp usb" 
          style={styles.input}
        />
      </View>
      <TouchableOpacity>
        <Ionicons name="cart" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    padding: 5,
  },
});

export default CustomHeader;