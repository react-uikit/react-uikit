'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Image,
  View
} = React;

module.exports = React.createClass({

    getDefaultProps() {
        return {
            headers: [],
            onChange: function(){}
        }
    },

    getInitialState() {
        return {
            activeTabId: 0
        };
    },

    handleSwitch(tabId) {
        this.setState({
            activeTabId : tabId
        });
        this.props.onChange && this.props.onChange(tabId);
    },

    renderHeaders(headers) {
        var that = this;
        return headers.map(function(tab, i){

            var style = that.state.activeTabId == i ? styles.tabActiveHeader : {};
            var styleText = that.state.activeTabId == i ? styles.tabActiveText : {};

            return(
                <TouchableWithoutFeedback onPress={() => that.handleSwitch(i)}>
                    <View style={[styles.tabHeader, style]} key={i}>
                        <Text style={[styles.tabText, styleText]}>{tab.text && tab}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        })

    },

    render() {
        var headers = this.props.headers;

        return (
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false} style={styles.tabContainer} contentContainerStyle={styles.contentStyle}
                    horizontal={true}>
                    {this.renderHeaders(headers)}
                </ScrollView>
            </View>
        );
    }
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row'
    },

    tabContainer: {
        flex : 1,
        height : 44,
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        borderTopColor : '#eeeeee',
        borderTopWidth : 1,
        backgroundColor: '#FAFAFA',
    },

    contentStyle : {
        flex : 1,
        flexDirection : 'row'
    },

    tabHeader :{
        justifyContent: 'center',
        height : 44,
        paddingLeft : 6,
        paddingRight : 6,
        borderBottomWidth : 3,
        borderBottomColor : '#FAFAFA'
    },

    tabActiveHeader : {
        borderBottomWidth : 3,
        borderBottomColor : '#2766cf'
    },

    tabText : {
        color : '#757575',
        fontSize : 14,
    },

    tabActiveText : {
        fontSize : 14,
        fontWeight : '700'
    }
});
