import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, FontAwesome } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: '我的设置',
    tabBarIcon: ({ tintColor }) => {
        return <FontAwesome name="cog" size={30} color={tintColor} />;
      }
  }
  render() {
    return (
      <View>
      <Text>Hello heres your profile!</Text>
      </View>
    );
  }
}

export default ProfileScreen;
