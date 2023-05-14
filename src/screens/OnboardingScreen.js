import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashboardSvg from '../components/DasboardSvg';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315f',
            textAlign: 'center',
          }}>
          Motors-Service
        </Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <DashboardSvg width={300} height={300} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            backgroundColor: '#C1121F',
            padding: 10,
            width: '59%',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 50,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}>
            Lets Start
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
