import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'HomeScreen';
import DetailsScreen from 'DetailsScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
  
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
    