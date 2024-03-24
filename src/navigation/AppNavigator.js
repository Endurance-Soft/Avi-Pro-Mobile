import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from '../screens/HomeScreen';
import ClientSearchScreen from '../screens/ClientSearchScreen';
import BillScreen from '../screens/BillScreen'
import ClientPaymentScreen from '../screens/ClientPaymentScreen';
import PayScreen from '../screens/PayScreen';
import AutomaticPayScreen from '../screens/AutomaticPayScreen';
import FacturaScreen from '../screens/FacturaScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
          name='PayScreen'
          component={PayScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='AutomaticPayScreen'
          component={AutomaticPayScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Factura" 
          component={FacturaScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
