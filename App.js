import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Homes" component={HomeStackScreen}/>
      <Drawer.Screen name="Detail" component={DetailsStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;