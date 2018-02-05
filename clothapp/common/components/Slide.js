import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { TimerMixin } from 'react-timer-mixin';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {

  //设置固定值
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 15 }}>
        <Button
        title="Get Start!"
        raised
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        />
        </View>
      );
    }
  }
  _scroll = (event, xscrollView) => {
    if (!this.state.scrolling) {
        this.setState({ singal: true, scrolling: true });
        console.log(this.state.scrolling);
        const scrollView = event.nativeEvent;
        const x = scrollView.contentOffset.x;

        const SVNWidth = scrollView.layoutMeasurement.width;
        const contentSize = scrollView.contentSize.width;

    //    console.log(x + ', ' + SVNWidth + ', ' + contentSize);

        if (x > 40 && this.state.singal) {
          this.setState({ singal: false });
      //    console.log(this.state.scrolling);
          xscrollView.scrollTo({ x: SVNWidth + SCREEN_WIDTH, y: 0, animated: true });
        }
      }
      this.setState({ scrolling: false });
      //  this.setState({ singal: false });
    }
  renderSlide() {
    return this.props.data.map((slide, index) => {
      return (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
      <Text style={styles.slideText}>{slide.text}</Text>
      {this.renderLastSlide(index)}
      </View>
    );
    });
  }

  render() {
    return (
      <ScrollView
      scrollEventThrottle={1}
      horizontal
      ref='scrollView'
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      enableEmptySections={false}
    //  onScroll={(event) => { this._scroll(event, xscrollView); }}
      style={{ flex: 1 }}
      >
      {this.renderSlide()}
      </ScrollView>
    );
  }


}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288d1'
  }
};

export default Slide;
