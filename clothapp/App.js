import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from './common/WelcomeScreen';
import LoginScreen from './common/LoginScreen';
import HomeScreen from './common/HomeScreen';
import MatchScreen from './common/MatchScreen';
import ProfileScreen from './common/ProfileScreen';
import ClothScreen from './common/ClothScreen';
import reducers from './common/reducers';

export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
        welcome: { screen: WelcomeScreen },
        login: { screen: LoginScreen },
        main: { screen: TabNavigator({
          home: { screen: HomeScreen },
          match: { screen: MatchScreen },
          list: { screen: ClothScreen },
          profile: { screen: ProfileScreen }
        }) }
       }, {
         navigationOptions: {
      //     tabBar: { visible: false }
          tabBarVisible: true
         },
         lazyLoad: true
       });
          return (
          <Provider store={createStore(reducers)}>
              <View style={styles.container}>
              <MainNavigator />
              </View>
              </Provider>


          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,

      },

      status_bar: {
          backgroundColor: 'white',
          ...Platform.select({
              android: {
                  height: StatusBar.currentHeight
              },
              ios: {
                  height: 20,
              }
          }),
      },
  });
