import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import {MyProvider} from "@/components/MyContext.js"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import LoginScreen from '@/components/screens/LoginScreen';
import StackNavigator from '@/components/navigation/TabBarIcon';

export default function App () {
  return (
    <MyProvider>
      <NavigationContainer independent={ true }>
        <StackNavigator />
      </NavigationContainer>
    </MyProvider>
  );
}

// Example styles (if needed)
const styles = StyleSheet.create( {
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
} );