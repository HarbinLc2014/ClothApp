import React, { Component } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from './actions';
import { likeCloth } from './actions/ClothAction';
import Swipe from './components/Swipe';

class MatchScreen extends Component {


    static navigationOptions = props => {
      const { navigation } = props;
      const { navigate } = navigation;
      return {
        title: '主页',
        tabBarIcon: ({ tintColor }) => {
            return <Entypo name="documents" size={30} color={tintColor} />;
          },
        headerTitle: 'Matching',
        headerStyle: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }

      };
    }

  componentWillMount() {
    console.log(this.props.clothes);
  }
        /* eslint-disable global-require */
  renderCard = (cloth) => {
    return (
      <Card title={cloth.title}>
      <View style={{ height: 300 }}>
      <Image
          source={{ uri: cloth.thumbnail }} style={{ flex: 1 }}
      />
      </View>
      <View style={styles.detailWrapper}>
      <Text style={{ fontSize: 18 }}>22</Text>
      </View>
      <Text>ssssssssssssssssssssssss</Text>
      </Card>
    );
    }
  renderNoMoreCards = () => {
      return (
        <Card title='No More Matches!'>
        </Card>
      );
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 40 }}>
      <Swipe
      data={this.props.clothes}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
  //    cloth={this.renderCard.cloth}
      onSwipeRight={cloth => this.props.likeCloth(cloth)}
      keyProp="title"
      />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  }
};

const mapStateToProps = state => {
//    console.log(state.libraries);
    return { clothes: state.clothes };
};

export default connect(mapStateToProps, { likeCloth })(MatchScreen);
