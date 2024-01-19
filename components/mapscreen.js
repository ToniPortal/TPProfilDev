import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }

                let currentLocation = await Location.getCurrentPositionAsync({});
                return setLocation(currentLocation.coords);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchLocation();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={{ flex: 1 }}>
            {location && (
                <View style={styles.container}>
                    <MapView style={styles.map} initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                        />
                    </MapView>
                </View>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});