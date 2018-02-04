import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';

class HomeScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '主页',
      tabBarIcon: ({ tintColor }) => {
          return <Foundation name="social-myspace" size={30} color={tintColor} />;
        },
      headerTitle: 'Matching',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }
  render() {
    return (
      <View>
      <Text>Hello Welcome!</Text>
      </View>
    );
  }
}

export default HomeScreen;
