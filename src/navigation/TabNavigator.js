import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  <TabNavigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favourite" component={FavouriteScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </TabNavigator>;
};

export default TabNavigator;
