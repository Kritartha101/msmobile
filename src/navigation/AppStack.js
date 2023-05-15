import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingsScreen';
import MyvScreens from '../screens/MyvScreens';
import HistoryScreen from '../screens/HistoryScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#C1121F',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -25, fontSize: 16},
      }}>
      <Drawer.Screen
        component={TabNavigator}
        name="Home"
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={MyvScreens}
        name="My Vehicles"
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="car-sport-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={HistoryScreen}
        name="History"
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="history" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={InvoiceScreen}
        name="Invoice"
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="file-invoice" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={OrdersScreen}
        name="Orders"
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={SettingScreen}
        name="Settings"
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
