'use strict';

var React = require('react-native');
var {
  PropTypes,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} = React;

var systemButtonOpacity = 0.2;

var Button = React.createClass({
  propTypes: {
    ...TouchableOpacity.propTypes,
    icon: Image.propTypes.source,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
  },

  render() {
    var touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
    };
    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }

    var buttonStateStyle = this.props.disabled ? styles.disabledText : null;
    
    var button;
    if(this.props.icon){
       button = (
           <View style={ [{flexDirection: 'column'}, this.props.style]}>
            <Image source={this.props.icon} style={{flex:1}}/>
            <Text style={[styles.smallText, buttonStateStyle]}>{this.props.children}</Text>
           </View>)
    }else{
       button = (
        <Text style={[styles.text, buttonStateStyle, this.props.style]}>
          {this.props.children}
        </Text>)
    }

    return (
      <TouchableOpacity {...touchableProps}>
        {button}
      </TouchableOpacity>
    );
  },

  _computeActiveOpacity() {
    if (this.props.disabled) {
      return 1;
    }
    return this.props.activeOpacity != null ?
      this.props.activeOpacity :
      systemButtonOpacity;
  },
});

var styles = StyleSheet.create({
  text: {
    color: '#007aff',
    fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  smallText: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 'normal',
    color: 'black',
    backgroundColor: 'transparent',
    marginLeft: 12,
    marginTop: 20,
    flex: 1
  },
  disabledText: {
    color: '#dcdcdc',
  }
});

module.exports = Button;