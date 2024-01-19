import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/navigator';  // Importation du gestionnaire de navigation personnalisé

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
