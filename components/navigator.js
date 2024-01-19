import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ProfilScreen from './profilscreen';
import MapScreen from './mapscreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Profil" component={ProfilScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    );
}
export default AppNavigator;
