'use strict';

var React = require('react-native');
var PropTypes = require('ReactPropTypes');

var {
    StyleSheet,
    View,
    Text,
} = React;

var PRECISION  = 500; // 0.5 seconds, used to update the view
function format(num){ return (num < 10)? '0'+num: num}

module.exports = React.createClass({
    propTypes: {
        finalDate: PropTypes.instanceOf(Date).isRequired,
    },

    getInitialState() {
        return {
            offset: {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    },

    componentWillMount(){
        this.start()
    },

    componentWillUnmount(){
        this.stop()
    },

    start(){
        if(this.interval !== null) {
            clearInterval(this.interval);
        }
        var self = this;
        this.update();
        this.interval = setInterval(function() {
            self.update.call(self);
        }, PRECISION);
    },

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    },

    update() {
        // Calculate the remaining time
        var totalSecsLeft = this.props.finalDate.getTime() -
            new Date().getTime(); // In miliseconds
        totalSecsLeft = Math.ceil(totalSecsLeft / 1000);
        totalSecsLeft = totalSecsLeft < 0 ? 0 : totalSecsLeft;
        // Calculate the offsets
        var offset = {
            seconds   : totalSecsLeft % 60,
            minutes   : Math.floor(totalSecsLeft / 60) % 60,
            hours     : Math.floor(totalSecsLeft / 60 / 60) % 24,
            days      : Math.floor(totalSecsLeft / 60 / 60 / 24) % 7,
            totalDays : Math.floor(totalSecsLeft / 60 / 60 / 24),
            weeks     : Math.floor(totalSecsLeft / 60 / 60 / 24 / 7),
            months    : Math.floor(totalSecsLeft / 60 / 60 / 24 / 30),
            years     : Math.floor(totalSecsLeft / 60 / 60 / 24 / 365)
        };

        // Dispatch an event
        if(totalSecsLeft === 0) {
            this.stop();
        }

        this.setState({offset: offset});
    },

    render() {
        var offset = this.state.offset;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.bg}><Text style={styles.number}>{format(offset.hours)}</Text></View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.bg}><Text style={styles.number}>{format(offset.minutes)}</Text></View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.bg}><Text style={styles.number}>{format(offset.seconds)}</Text></View>
            </View>
         );
    }
});

var styles = StyleSheet.create({
    container: {
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    bg: {
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'black'
    },

    number: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },

    separator: {
        width: 4,
        height: 20,
        //lineHeight: 14,
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: 'transparent',
    },
});
