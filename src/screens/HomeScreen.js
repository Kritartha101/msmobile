import { View, Text,Button, Stylesheet } from 'react-native'
import React from 'react'

const HomeScreen =({navigation}) => {
  return(
  <View style={{flex:1,
    alignItems: 'center',
    justifyContent:"center",}}>
    <Text>HomeScreen</Text>
    <Button title='Go to details screen'
    onPress={()=> navigation.navigate("Details")}
    />
  </View>
  )
}


export default HomeScreen;

