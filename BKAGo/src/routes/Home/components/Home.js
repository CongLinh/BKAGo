import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

//import { Container } from 'native-base'; // su dung View trong r-n de thay the cho Container

import MapContainer from './MapContainer';

export default class Home extends React.Component {

    componentDidMount() {
        this.props.getCurrentLocation();
        
    }

    render() {
        const region = {
            latitude: 21.002098, 
            longitude: 106.395802,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        return (
            <View style={styles.container}>
                {
                    !this.props.myRegion.latitude 
                    ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="black" />
                    </View>
                    :
                    <MapContainer region={this.props.myRegion} />
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white'
    },
});

