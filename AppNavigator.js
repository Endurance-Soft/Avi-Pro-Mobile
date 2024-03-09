import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './src/screens/HomeScreen';
import ClientSearchScreen from './src/screens/ClientSearchScreen';
import BillScreen from './src/screens/BillScreen'
import ClientPaymentScreen from './src/screens/ClientPaymentScreen';
import ClientPaymentSelectedScreen from './src/screens/ClientPaymentSelectedScreen';
import PayScreen from './src/screens/PayScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewScreen" 
        screenOptions={{
        animationEnabled: false,
      }}
      >
        <Stack.Screen 
          name="NewScreen" 
          component={NewScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ClientSearchScreen" 
          component={ClientSearchScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BillScreen" 
          component={BillScreen} 
          options={{ headerShown: false }} 
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
          }}/>

        <Stack.Screen 
          name="PayScreen" 
          component={PayScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
