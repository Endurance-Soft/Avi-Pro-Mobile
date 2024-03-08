import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './src/screens/HomeScreen';
import ClientSearchScreen from './src/screens/ClientSearchScreen';
import BillScreen from './src/screens/BillScreen'
import { Animated, Easing } from 'react-native';
import CascadingEffectScreen from './src/screens/CascadingEffectScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewScreen" 
        screenOptions={{
        animationEnabled: false, // Desactivar animaciones de transición
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
            name='CascadingEffectScreen' 
            component={CascadingEffectScreen} 
            options={{
                headerShown: false,
            }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
