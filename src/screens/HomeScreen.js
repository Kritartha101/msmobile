import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Bar from '../components/Bar';

const HomeScreen = () => {
  return (
    <>
      <Bar />
      <View style={{flex: 10}}>
        <Text>Welcome John Doe</Text>
      </View>
    </>
  );
};

export default HomeScreen;
