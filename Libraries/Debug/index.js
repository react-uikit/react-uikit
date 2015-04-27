var StyleSheet = require('react-native').StyleSheet;
var merge = require('merge');
var assign = require('Object.assign');
var originCreate = StyleSheet.create;

function randomHexColor() {
  return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
}

var debugOptions = {borderColor: randomHexColor, borderWidth: 1};

StyleSheet.create = function(styleObject){
  for (var styleClass in styleObject) {

    var propertiesForStyleClass = {};
    for (var debugProperty in debugOptions) {

      // Apply the function to get a value unique to this styleClass for the property
      if (typeof debugOptions[debugProperty] == 'function') {
        var value = debugOptions[debugProperty].call(this, styleClass, debugProperty, styleObject[styleClass][debugProperty]);

        if (value != null && (typeof value !== 'undefined')) {
          propertiesForStyleClass[debugProperty] = value;
        }
      // Otherwise just set the value
      } else {
        propertiesForStyleClass[debugProperty] = debugOptions[debugProperty];
      }
    }

    styleObject[styleClass] = merge(styleObject[styleClass], propertiesForStyleClass);
  }

  return originCreate(styleObject);
}

module.exports = StyleSheet;
