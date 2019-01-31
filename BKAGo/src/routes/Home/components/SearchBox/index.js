import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SearchBoxStyles';

export const SearchBox = () => {
    return (
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>FROM</Text>
                <View style={{flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-around'}}>
                    <Icon name="search" size={15} color="red"/>
                    <TextInput style={{ width: 310, height: 30}} placeholder="Bạn đang ở đâu?" placeholderTextColor="gray"/>
                </View>
                
            </View>
            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>TO</Text>
                <View style={{flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-around'}}>
                    <Icon name="search" size={15} color="red"/>
                    <TextInput style={{ width: 310, height: 30}} placeholder="Bạn muốn đến đâu?" placeholderTextColor="gray" />
                </View>
                
            </View>
            
        </View>
    );
}

export default SearchBox;