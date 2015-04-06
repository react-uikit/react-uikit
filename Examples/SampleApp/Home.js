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
var Separator = require('../../Libraries/Separator');
var Countdown = require('../../Libraries/Countdown');

var {
    StyleSheet,
    StatusBarIOS,
    ScrollView,
    Image,
    TextInput,
    Text,
    View,
} = React;

module.exports = React.createClass({

    componentWillMount(){

    },

    renderHeader(){
//    <TextInput
//    style={styles.search}
//    autoCapitalize="none"
//    placeholder="搜索宝贝"
//    clearButtonMode="while-editing"
//    autoCorrect={false}
//    />
        return (
            <View style={styles.header}>

            </View>
         )
    },

    renderCarsousel(){

        var images = [
            'http://gw.alicdn.com/tps/i4/TB1qsfTHpXXXXbVXpXXdIns_XXX-1125-352.jpg_q50.jpg',
            'http://gw.alicdn.com/tps/i3/TB1UEnJHpXXXXXsaXXXdIns_XXX-1125-352.jpg_q50.jpg',
            'http://gw.alicdn.com/tps/i1/TB1vljRHpXXXXcjXXXXdIns_XXX-1125-352.jpg_q50.jpg',
            'http://gw.alicdn.com/tps/i2/TB1TOPKHpXXXXbhXVXXdIns_XXX-1125-352.jpg_q50.jpg'
        ].map(function(uri, i){
            return <Image key={i} style={styles.page} source={{uri: uri}}/>
        });

        return <View style={{height: 120}}>
            <Carousel>
            {images}
            </Carousel>
        </View>
    },

    renderIcons(){

        function navigator(icons, texts){
            return icons.map(function (uri, i) {
                return (
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2}}>
                        <Image style={styles.img} key={i} source={ {uri} }/>
                        <Text style={styles.smallText}>{texts[i]}</Text>
                    </View>
                    )
            });
        }

        return (
            <View style={{
                flexDirection: 'column',
                padding: 5,
                backgroundColor: 'white'
            }}>
                <View style={styles.section}>
                    {navigator([
                        'http://gw.alicdn.com/tps/i1/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png',
                        'http://gw.alicdn.com/tps/i2/TB1mhqJGFXXXXaBXpXXszjdGpXX-140-140.png',
                        'http://gw.alicdn.com/tps/i2/TB1oq4xHXXXXXbxXpXXszjdGpXX-140-140.png',
                        'http://gw.alicdn.com/tps/i3/TB1QeiDGFXXXXb8XVXXszjdGpXX-140-140.png'
                    ], [
                        '天猫',
                        '聚划算',
                        '淘生活',
                        '淘点点'
                    ])}
                </View>

                <View style={styles.section}>
                {navigator([
                    'http://gw.alicdn.com/tps/i3/TB1pAV7HXXXXXX5aXXXszjdGpXX-140-140.png',
                    'http://gw.alicdn.com/tps/i1/TB1z8qiHpXXXXceaXXXszjdGpXX-140-140.png',
                    'http://gw.alicdn.com/tps/i3/TB1hW9KGFXXXXXLXpXXszjdGpXX-140-140.png',
                    'http://gw.alicdn.com/tps/i4/TB1Ed9LGFXXXXc3XXXXszjdGpXX-140-140.png'
                ], [
                    '充值',
                    '去啊',
                    '领金币',
                    '类目'
                ])}
                </View>
            </View>
            )

    },


    renderShowcase(){
    // border top/left/bottom/right width not working
    // https://github.com/facebook/react-native/issues/29
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
            height: 170,
            backgroundColor: 'white'
        }}>

            <View style={{flex: 450}}>
                <Image
                style={{
                    flex: 1,
                    resizeMode: Image.resizeMode.stretch
                }}
                source={{uri: 'http://gw.alicdn.com/tps/i2/TB1WODPHpXXXXbEXFXX3.xE_XXX-450-540.png?imgtag=avatar'}}/>
            </View>
            <Separator vertical/>
            <View style={{flex: 675, flexDirection: 'column'}}>

                <Image
                style={{flex: 675,
                    resizeMode: Image.resizeMode.stretch
                }}
                source={{uri: 'http://gw.alicdn.com/tps/i2/TB1FmJxHpXXXXX7XpXX.l5FJpXX-675-216.jpg_q50.jpg'}}
                />
                <Separator/>
                <View style={{flex: 675, flexDirection: 'row'}}>
                    <Image
                    style={{ flex: 333,
                        resizeMode: Image.resizeMode.contain,
                    }}
                    source={{uri: 'http://gw.alicdn.com/tps/i4/TB1Z7PQHpXXXXb5XFXXW2_Z5VXX-333-324.png'}}
                    />
                    <Separator vertical/>
                    <Image
                    style={{ flex: 333,
                        resizeMode: Image.resizeMode.stretch,
                    }}
                    source={{uri: 'http://gw.alicdn.com/tps/i1/TB1bELNHpXXXXXxXFXXW2_Z5VXX-333-324.png'}}
                    />
                </View>
            </View>
        </View>)
    },

    render(){

        return (
            <View style={[styles.container, {backgroundColor: '#eeeeee'}]}>
                {this.renderHeader()}

                <ScrollView
                    scrollsToTop={true}
                    contentContainerStyle={[styles.container, {marginTop: -22}]}
                >
                    {this.renderCarsousel()}
                    {this.renderIcons()}
                    {this.renderShowcase()}
                    <Countdown finalDate={new Date('2016/1/1')} style={{marginTop: -115, marginLeft: 15}}/>

                </ScrollView>
            </View>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    header: {
        paddingTop: 16,
        paddingBottom: 4,
        backgroundColor: '#ff4400'
    },

    search: {
        height: 26,
        marginHorizontal: 50,
        marginVertical: 6,
        paddingHorizontal: 10,
        color: 'white',

        backgroundColor: '#E45029',
        borderWidth: 0.5,
        borderColor: '#E45029',
        fontSize: 18,
    },

    section: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    img: {
        width: 48,
        height: 48,
        marginHorizontal: 8,
        marginVertical: 4,
    },

    rowText: {
        color: '#888888',
    },

    page: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 375,
        height: 120,
        resizeMode: Image.resizeMode.contain
    },

    smallText: {
        fontFamily: 'Helvetica',
        fontSize: 10,
        marginTop: 4,
        fontWeight: 'normal',
        color: '#666666',
        backgroundColor: 'transparent',
    },

});
