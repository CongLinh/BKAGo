import React from 'react';
// import { View } from 'native-base';
import { View } from 'react-native'; // thay the View trong n-b
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './MapContainerStyles';

export const MapContainer = ({region}) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                <Marker 
                    coordinate={region}
                    pinColor='red'
                    title='Ling'
                    description="Haahahahahah"
                />
            </MapView>
        </View>
    );
}

export default MapContainer;