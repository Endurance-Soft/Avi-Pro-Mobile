import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import FacturaScreen from '../screens/FacturaScreen';
import HistoryScreen from '../screens/HistoryScreen';
import OthersScreen from '../screens/OthersScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../constants';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, color, size }) => {
  return <Icon name={name} color={color} size={size} />;
};


function AppNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: theme.colors.tertiary,
            tabBarInactiveTintColor: theme.colors.slateGrey,
            headerShown: false,
          }}
        >
          <Tab.Screen
          name="Inicio"
          component={StackNavigator}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
              
            ),
          })}
        />
          <Tab.Screen
          name="Historial"
          component={HistoryScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} size={size} />
            ),
            tabBarBadge: 3, //borrar
          })}
        />
          <Tab.Screen
          name="Otros"
          component={OthersScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name={focused ? 'menu' : 'menu-outline'} color={color} size={size} />
            ),
          })}
        />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="ActivationScreen" 
        screenOptions={{
        animationEnabled: false,
        headerShown: false,
      }}
      >
        <Stack.Screen 
          name="NewScreen" 
          component={NewScreen}
        />
        <Stack.Screen 
          name="ClientSearchScreen" 
          component={ClientSearchScreen}
        />
        <Stack.Screen 
          name="BillScreen" 
          component={BillScreen}
        />
        <Stack.Screen
          name='ClientPaymentScreen'
          component={ClientPaymentScreen}
        />
        <Stack.Screen
          name='PayScreen'
          component={PayScreen}
        />
        <Stack.Screen
          name='ActivationScreen'
          component={ActivationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='AutomaticPayScreen'
          component={AutomaticPayScreen}
        />
        <Stack.Screen 
          name="Factura" 
          component={FacturaScreen}
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
  );
}

export default AppNavigator;
