import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './src/screens/HomeScreen';
import ClientSearchScreen from './src/screens/ClientSearchScreen';
import BillScreen from './src/screens/BillScreen'
import { Animated, Easing } from 'react-native';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: ({current, layouts}) => {
          return {
            cardStyle: {
              opacity: current.progress,
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height * 0.3, 0],
                  }),
                },
              ],
            },
          };
        },
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.ease,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.ease,
            },
          },
        },
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
