import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Order Bubble Tea'>
        <Stack.Screen name="Order Bubble Tea" component={Screen1}/>
        <Stack.Screen name="Order Receipt" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
