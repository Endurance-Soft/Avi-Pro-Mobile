import React from 'react';
import { Easing } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './src/screens/HomeScreen';
import ClientSearchScreen from './src/screens/ClientSearchScreen';
import ClientPaymentScreen from './src/screens/ClientPaymentScreen';
import ClientPaymentSelectedScreen from './src/screens/ClientPaymentSelectedScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewScreen" >
        <Stack.Screen 
            name="NewScreen" 
            component={NewScreen} 
            options={{ 
                headerShown: false,
            }} />
        <Stack.Screen 
            name="ClientSearchScreen" 
            component={ClientSearchScreen} 
            options={{
                headerShown: false,
            }} 
        />
        <Stack.Screen
          name='ClientPaymentScreen'
          component={ClientPaymentScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ClientPaymentSelectedScreen'
          component={ClientPaymentSelectedScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
