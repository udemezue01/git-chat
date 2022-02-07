import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './src/screens/Landing'

const Stack = createNativeStackNavigator();

const App = () =>{
 
  return (

  



    <NavigationContainer
    screenOptions={{
      headerShown: false
    }} 
    
    initialRouteName="Landing"
    
    >
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Landing} />
        </Stack.Navigator>

    </NavigationContainer>

  

    
  );
}



export default App
