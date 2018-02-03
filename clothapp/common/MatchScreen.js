import React, { Component } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Swipe from './components/Swipe';

class MatchScreen extends Component {


    static navigationOptions = props => {
      const { navigation } = props;
      const { navigate } = navigation;
      return {
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
      <View style={{ flex: 1 }}>
      <Swipe
      data={this.props.clothes}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
      person={this.renderCard.cloth}
      swipeRight={this.swipeRight}
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

export default connect(mapStateToProps)(MatchScreen);
