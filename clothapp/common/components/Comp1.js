import React, { Component } from 'react';
import { Text, View, Platform, AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
    AlertIOS } from 'react-native';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';

const ImageData = require('../ImageData.json');

class Comp1 extends Component {
  state = { currentPage: 0 };
  renderAllImage() {
        var i = 0;
        var allImage = [];
        var imgsArr = ImageData.data;
        for (i = 0; i < imgsArr.length; i++) {
          var item = imgsArr[i];
          //创建组件加入数组
          allImage.push(
            <Image key={i} source={{ uri: item.img }} style={{ flex: 1, width: 150, height: 250 }} />
          );
        }
        return allImage;
      }
      onAnimationEnd(e){
      // 计算水平方向的偏移量
      var offSetX = e.nativeEvent.contentOffset.x;

      //当前的页数
      var currentPage = Math.floor(offSetX / 150);
      //更新指示器，绘制ui
      this.setState({
          currentPage:currentPage
      });
      //AlertIOS.alert(" currentPage=  " +this.state.currentPage);
    }
      renderPageCircle() {
            var indicatorArr = [];
            var imgsArr = ImageData.data;
            var style;
            for(var i=0 ; i<imgsArr.length;i++){
              //判断当前页选择样式
              style = (i==this.state.currentPage) ? { color: 'orange', textAlign: 'center' } : { color: '#ffffff', textAlign: 'center' };
              indicatorArr.push(
                  <Text key={i} style={[{fontSize:25,color:'white',textAlign:'center'},style]}>&bull;</Text>
              );
            }
            return indicatorArr;
          }

  render() {
        return (
          <View style={styles.container}>
            <ScrollView
                ref='scrollView'
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={{ width: 150, height: 250 }}
                onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                // 开始拖拽
      //          onScrollBeginDrag={this.onScrollBeginDrag}
                // 停止拖拽
      //          onScrollEndDrag={this.onScrollEndDrag}
            >
              {this.renderAllImage()}
            </ScrollView>
            <View style={styles.pageViewStyle}>
            {this.renderPageCircle()}
            </View>
          </View>
        );
      }

  }

  const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pageViewStyle: {
    width: 150,
    height: 25,
    //marginTop: -100,
    //marginTop: 550,
//    marginLeft: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 225,
  //  bottom: 0,
    //设置主轴的方向
    flexDirection: 'row',
    //侧轴方向对齐
    alignItems: 'center'
  }

  });
export default Comp1;
