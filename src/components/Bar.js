import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Bar = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <ImageBackground
            source={require('../assets/images/logo.png')}
            style={{width: 170, height: 50}}
            imageStyle={{borderRadius: 27}}
          />

          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 50, height: 50}}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bar;
