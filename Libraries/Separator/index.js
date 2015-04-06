
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = React;

module.exports = React.createClass({
    propTypes: {
        vertical: React.PropTypes.bool,
        style: Text.propTypes.style,
    },
    render() {
        return <View style={[this.props.vertical? styles.verticalSeparator: styles.horizontalSeparator, this.props.style]}></View>
    },
});

var styles = StyleSheet.create({
    horizontalSeparator: {
        height: 0.5,
        backgroundColor: '#e8e8e8',
    },
    verticalSeparator: {
        width: 0.5,
        backgroundColor: '#e8e8e8',
    }
});
