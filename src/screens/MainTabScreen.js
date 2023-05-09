import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'HomeScreen';
import DetailsScreen from 'DetailsScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen=() => (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );



const HomeStackScreen =({navigation}) => (
    <HomeStack.Navigator screenOptions ={{
        headerStyle:{
          backgroundColor :'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name = "home-menu" size={25}
          backgroundColor='#009387' options={()=> navigation.openDrawer()}>
    
          </Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
    );
    
    const DetailsStackScreen =({navigation}) => (
      <DetailsStack.Navigator screenOptions ={{
          headerStyle:{
            backgroundColor : '#009387',
          },
          headerTintColor:'#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
      }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
          
        }}/>
      </DetailsStack.Navigator>
      );
    