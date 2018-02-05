import React, { Component } from 'react';
import { Text, View, Platform, AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
    AlertIOS } from 'react-native';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';
import Comp1 from './components/Comp1';

const ImageData = require('./ImageData.json');

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
      <View style={{ width: 200, height: 600 }}>
      <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 50 }}>
     <Comp1 />
     </View>
     </View>
   );
  }
}


export default HomeScreen;
