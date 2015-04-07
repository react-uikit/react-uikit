/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var Carousel = require('../../Libraries/Carousel');
var Button = require('../../Libraries/Button');
var Separator = require('../../Libraries/Separator');

var {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
} = React;

module.exports = React.createClass({
  propTypes: {

  },
  renderBar (){

    return (
        <View style={styles.bar}>

            <Separator />

            <View style={styles.barContent}>
                <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                    <Image style={styles.wwBtn} source={require('image!ww')} />
                    <Text style={styles.smallText}>客服</Text>
                </View>

                <Separator vertical/>

                <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2}}>
                    <Image style={styles.favBtn} source={require('image!fav')} />
                    <Text style={styles.smallText}>收藏</Text>
                </View>

                <Button style={styles.cartBtn}><Text>加入购物车</Text></Button>
                <Button style={styles.buyBtn}><Text>立即购买</Text></Button>
            </View>
        </View>

        )
  },

  getInitialState () {
    return {
      data: null,
      loaded: false,
    }
  },
  componentDidMount () {
    this.fetchData();
  },
  fetchData () {
    fetch('http://hws.m.taobao.com/cache/wdetail/5.0/?id=' + (this.props.id || 44141651091) )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData.data,
          loaded: true
        });
      })
      .done();
  },
  renderCarsousel(pics){

      var images = pics.map(function(uri, i){
          return <Image key={i} style={styles.page} source={{uri: uri}}/>
      });

      return <View style={{height: 375}}>
          <Carousel>
          {images}
          </Carousel>
      </View>
  },

  renderItem (){

    if(!this.state.loaded){
      return(
        <View style={styles.container}>
        <Text style={styles.loadingText}>
            努力加载中...
        </Text>
      </View>
      );
    }else{
      var data = this.state.data;
      var itemInfo = data.itemInfoModel;

      return (
         <ScrollView>
           {this.renderCarsousel(itemInfo.picsPath)}
         </ScrollView>
      )
    }

  },

  render () {

    return (
      <View style={[styles.container]}>
      {this.renderItem()}
      {this.renderBar()}
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  page: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 375,
      height: 375,
      resizeMode: Image.resizeMode.contain
  },
  bar: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right:0,
    flexDirection: 'column',
  },
  barContent: {

     flexDirection: 'row',
  },
  wwBtn: {
    width: 20,
    height: 20,
    //resizeMode: Image.resizeMode.contain
  },
  favBtn: {
    width: 20,
    height: 20,
    //resizeMode: Image.resizeMode.contain
  },
  smallText: {
      fontFamily: 'Helvetica',
      fontSize: 10,
      marginTop: 4,
      fontWeight: 'normal',
      color: '#666666',
      backgroundColor: 'transparent',
  },
  cartBtn: {
    height: 40,
    lineHeight: 30,
    flex: 3,
    backgroundColor:'#FF9402',
    color: 'white'
  },
  buyBtn: {
    height: 40,
    lineHeight: 30,
    flex: 3,
    backgroundColor:'#FF5000',
    color: 'white'
  }
});
