var StyleSheet = require('react-native').StyleSheet;
var originCreate = StyleSheet.create;

var inherit = [
	"azimuth",
	"borderCollapse",
	"borderSpacing",
	"captionSide",
	"color",
	"cursor",
	"direction",
	"elevation",
	"emptyCells",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"font",
	"letterSpacing",
	"lineHeight",
	"listStyleImage",
	"listStylePosition",
	"listStyleType",
	"listStyle",
	"orphans",
	"pitchRange",
	"pitch",
	"quotes",
	"richness",
	"speakHeader",
	"speakNumeral",
	"speakPunctuation",
	"speak",
	"speakRate",
	"stress",
	"textAlign",
	"textIndent",
	"textTransform",
	"visibility",
	"voiceFamily",
	"volume",
	"whiteSpace",
	"widows",
	"wordSpacing"
]

var fast = {};
inherit.forEach(function(v) {
	fast[v] = true;
})


function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function parse(flat, styles, name, node) {
  var children = [];
  for(key in node) {
    value = node[key];
    if(typeof(value) === 'object') {
      children[key] = value;
      continue;
    }
    styles[key] = value;
  }
  if(name != "") {
    flat[name] = styles;
  }
  var inheritable = {};
  for(key in styles) {
    if(!fast[key]) continue;
    inheritable[key] = styles[key];
  }
  for(key in children) {
    parse(flat, clone(inheritable), name + "." + key, children[key])
  }
}

StyleSheet.create = function (styles) {
	var flat = {};
	parse(flat, {}, [], styles);
  return originCreate(flat);
}

module.exports = StyleSheet
