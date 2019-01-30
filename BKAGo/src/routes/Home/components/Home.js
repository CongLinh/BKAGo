import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component {

    componentDidMount() {
        this.props.setName();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello {this.props.myName}!</Text>
                <Text>Nice to meet you!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
});

