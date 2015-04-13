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
var Tab = require('../../Libraries/Tab');
var LinearGradient = require('../../Libraries/LinearGradient')
var SideMenu = require('../../Libraries/SideMenu');

var {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} = React;

var SideView = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          side view
        </Text>
      </View>
    );
  }
});

var FrontView = React.createClass({

  render: function () {
    return (
      <View style={styles.container}>
          <Tab style={styles.tab}
          headers={['Tab1', 'Tab2', 'Tab3', 'Tab4']}></Tab>

          <LinearGradient colors={['#ff4400', '#bb4400', '#994400']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              登录
            </Text>
          </LinearGradient>
      </View>
    );
  }
})

module.exports = React.createClass({

    render: function() {


        return (
          <View style={styles.container}>
              <SideMenu
                frontView={FrontView}
                sideView={<SideView />}
              />
          </View>
        )
    }
});


// Later on in your styles..
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    instructions: {
        color: '#333333',
        fontSize: 16,
        marginTop: 100,
        marginLeft: 50,
    },
    tab: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'transparent',
        color: '#ffffff',
    },
});
