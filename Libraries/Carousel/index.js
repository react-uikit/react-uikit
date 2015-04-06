'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    ScrollView,
} = React;

var Carousel = React.createClass({

    getDefaultProps() {
        return {
            width: 375,
            indicatorColor: '#ff4400',
            inactiveIndicatorColor: '#ffffff'
        }
    },

    getInitialState() {
        return {
            currentX: 0,
            activePage: 0
        }
    },

    start(){

        var scrollView = this.refs.scrollView;
        var length = this.props.children.length;
        var self = this;

        setInterval(function(){

            var activePage;

            if( (self.state.activePage + 1)  >= length){
                activePage = 0;
            }else{
                activePage = self.state.activePage + 1;
            }

            var currentX = self.props.width * activePage;
            scrollView.scrollResponderScrollTo(currentX, 0);

            self.setState({
                currentX: currentX,
                activePage: activePage
            });

        }, 4000)
    },

    componentDidMount(){
        this.start()
    },

    render() {

        return (
            <View style={this.props.style}>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimationEnd}
                >
                    {this.props.children}
                </ScrollView>
                {this.renderPageIndicator()}
            </View>
            );
    },

    renderPageIndicator() {
        var indicators = [],
            style,
            position;

        position = {
            width: this.props.children.length * 15,
        };

        position.left = (this.props.width - position.width) / 2;

        for (var i=0; i< this.props.children.length; i++) {
            style = i === this.state.activePage ? { color: this.props.indicatorColor } : { color: this.props.inactiveIndicatorColor };
            indicators.push(<Text key={i} style={[style, {fontSize: 32}]}>&bull;</Text>)
        }

        return (
            <View style={[styles.pageIndicator, position]}>
            {indicators}
            </View>
        )
    },

    onAnimationEnd(e) {
        var activePage = e.nativeEvent.contentOffset.x / this.props.width;
        // console.log(e.nativeEvent)
        this.setState({
            currentX: e.nativeEvent.contentOffset.x,
            activePage: activePage
        });
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    pageIndicator: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: -30,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

module.exports = Carousel;