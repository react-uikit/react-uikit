var React = require('react-native');
var Separator = require('../../Libraries/Separator');
var Item = require('./Item');
var {
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loadingText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: '#FF6600'
    },
    listView:{
        backgroundColor: 'white',
    },
    cellContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        backgroundColor: 'white',
    },
    itemDetailsContainer:{
        flex: 1,
        paddingLeft: 4,
    },
    itemPic: {
        width: 90,
        height: 90,
    },
    itemTitle: {
        fontSize: 12,
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
        color: 'black'
    },
    itemPrice: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 8,
        color: '#FF4400'
    },
    itemSold: {
        fontSize: 10,
        textAlign: 'left',
        marginTop: 4,
        marginBottom: 4,
        color: '#aaaaaa'
    }
});

var ItemCell = React.createClass({
    render: function() {

        var item = this.props.item;
        return (
            <TouchableOpacity onPress={this.props.onSelect}>
                <View style={styles.cellContainer}>
                    <Image style={styles.itemPic} source={{uri: item.pic_path.replace('_60x60.jpg', '_180x180.jpg')}} />
                    <View style={styles.itemDetailsContainer}>
                        <Text style={styles.itemTitle}>
                        {item.title}
                        </Text>
                        <Text style={styles.itemPrice}>
                        ￥{item.priceWap || item.price}
                        </Text>
                        <Text style={styles.itemSold}>
                        {item.sold}人付款 {item.location}
                        </Text>
                        <Separator/>
                    </View>
                </View>
            </TouchableOpacity>
         );
    }
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    }
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch('http://s.m.taobao.com/search?n=20&page=1')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.itemsArray),
          loaded: true
        });
      })
      .done();
  },
  render: function() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
        <Text style={styles.loadingText}>
            努力加载中...
        </Text>
      </View>
      );
    }
    return (
      this.renderListView()
    );
  },
  renderListView: function(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}/>
    );
  },
  renderRow: function(item){
    return(
      <ItemCell
        onSelect={() => this.selectRow(item)}
        item={item}/>
    );
  },
  selectRow: function(item){
    this.props.navigator.push({
      title: item.title,
      component: Item,
      passProps: {
        id: item.item_id,
        pic: item.pic_path.replace('_60x60.jpg', '_600x600.jpg'),
        title: item.title,
        sold: item.sold,
        shipping: item.shipping,
        location: item.location,
        price: item.price,
        priceWap: item.priceWap,
      }
    });
  },

});
