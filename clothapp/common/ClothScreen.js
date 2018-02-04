import React, { Component } from 'react';
import { Text, ScrollView, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import * as actions from './actions';

class ClothScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '主页',
      tabBarIcon: ({tintColor}) => {
          return <Icon name="favorite-border" size={30} color={tintColor} />;
        },
      headerTitle: 'Matching',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }
  componentWillMount() {
    console.log('likedClothes:');
    console.log(this.props.likedClothes);
  }
  renderLikedCloth() {
    return this.props.likedClothes.map(cloth => {
      return (
        <Card title={cloth.title}>
        <View style={{ height: 200 }}>
        <View style={styles.detailWrapper}>
        <Text style={styles.italics} >{cloth.description}</Text>
        </View>
        </View>
        </Card>
      );
    });
  }
  render() {
    return (
      <ScrollView>
      <Button title='click' onPress={() => console.log(this.props.likedClothes)} />
        {this.renderLikedCloth()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
};

const mapStateToProps = (state) => {
  return { likedClothes: state.likedClothes };
};

export default connect(mapStateToProps, actions)(ClothScreen);
