## RefreshableListView

A pull-to-refresh ListView which shows a loading spinner while your data reloads.

### Usage

props:

- `loadData`: a function returning a promise or taking a callback, invoked 
  upon pulldown. spinner will show until the promise resolves or the 
  callback is called.
- `refreshDescription`: text/element to show alongside spinner.

### Example

```js
var React = require('react-native')
var {Text, View, ListView} = React

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

React.createClass({
  getInitialState() {
    return {dataSource: ds.cloneWithRows([{foo:1}, {foo:2}])}
  },
  loadDate() {
    // return a promise of reload completion
  },
  renderRow(rowData) {
    // return row
  },
  render() {
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        loadData={this.loadDate}
        refreshDescription="Pull To Refresh"
      />
    )
  }
})
```