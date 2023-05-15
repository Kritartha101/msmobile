import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import React from 'react';
import Bar from '../components/Bar';

const Profile = () => {
  return (
    <>
      <Bar />
      <View style={{flex: 9}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            padding: 3,
            margin: 3,
          }}>
          <View style={style.top}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Profile</Text>
            <Text>Edit</Text>
          </View>
          <View style={style.top}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 100, height: 100, marginTop: 16}}
              imageStyle={{borderRadius: 25}}
            />
            <View style={{paddingRight: 100, paddingTop: 25}}>
              <Text style={style.text}>Name: John Doe</Text>
              <Text style={style.text}>Email: John@gmail.com</Text>
              <Text style={style.text}> Mobile: 9876767686 </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.7,
            backgroundColor: '#f6f6f6',
            padding: 3,
            margin: 3,
          }}>
          <View style={style.top}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Address</Text>
            <Text style={style.text}>Edit</Text>
          </View>
          <View style={style.top}>
            <Text style={style.text}>City: Balkumari</Text>
            <Text style={style.text}>District: Lalitpur</Text>
          </View>
          <View style={style.top}>
            <Text style={style.text}>State: Bagmati</Text>
            <Text style={style.text}>Country: Nepal</Text>
          </View>
          <Text style={style.text}>Zip Code: 44460</Text>
        </View>

        <View
          style={{
            flex: 1.2,
            backgroundColor: '#ffffff',
            padding: 3,
            margin: 3,
          }}>
          <View style={style.top}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>
              Vehicle Overview
            </Text>
            <Text style={style.text}>Edit</Text>
          </View>
          <Text style={style.text}>Plate No:BA-23-PA-2345</Text>
          <Text style={style.text}>Model: Pulsar 220</Text>
          <View style={style.top}>
            <Text style={style.text}>Brand: Bajaj</Text>
            <Text style={style.text}>Engine Cc: 220</Text>
          </View>
          <Text style={style.text}>Engine No:E4Q7667567</Text>
          <Text style={style.text}>Chasis No: 656757576576567</Text>
          <Text style={style.text}>Regd Date: 30-12-2078</Text>
        </View>

        <View
          style={{flex: 1, backgroundColor: '#f6f6f6', padding: 3, margin: 3}}>
          <View style={style.top}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>
              Emergency Contact
            </Text>
            <Text style={style.text}>Edit</Text>
          </View>
          <Text style={style.text}>Name: Doe John</Text>
          <Text style={style.text}>Relation: Brother</Text>
          <Text style={style.text}>Contact: 9876765565</Text>
          <Text style={style.text}>Email: Doe@gmail.com</Text>
        </View>
      </View>
    </>
  );
};

export default Profile;

const style = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 3,
    marginBottom: 3,
    fontSize: 15,
  },
});
