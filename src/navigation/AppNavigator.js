import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from '../screens/HomeScreen';
import ClientSearchScreen from '../screens/ClientSearchScreen';
import BillScreen from '../screens/BillScreen'
import ClientPaymentScreen from '../screens/ClientPaymentScreen';
import PayScreen from '../screens/PayScreen';
import AutomaticPayScreen from '../screens/AutomaticPayScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ActivationScreen from '../login/ActivationScreen';
import LoginScreen from '../login/LoginScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="NewScreen"  */}
      <Stack.Navigator initialRouteName="ActivationScreen"
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
          name='ActivationScreen'
          component={ActivationScreen}
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
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
