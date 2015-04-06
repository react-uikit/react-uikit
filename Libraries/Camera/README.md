# Camera

A `<Camera>` component for react-native.

## Usage

1. In XCode, in the project navigator right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-camera` and add `RCTCamera.xcodeproj`
3. Add `libRCTCamera.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Click `RCTCamera.xcodeproj` in the project navigator and go the `Build Settings` tab. Look for `Header Search Paths` and make sure it contains both `$(SRCROOT)/../react-native/React` and `$(SRCROOT)/../../React` - mark both as `recursive`.
5. Whenever you want to use it within React code now you can: `var Camera = require('react-uikit/Camera');`.

## Example

```javascript
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Camera = require('react-uikit/Camera');

var cameraApp = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this._switchCamera}>
          <View>
            <Camera
              ref="cam"
              aspect="Stretch"
              orientation="PortraitUpsideDown"
              style={{height: 200, width: 200}}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  },
  _switchCamera: function() {
    this.refs.cam.switch();
  }
});

AppRegistry.registerComponent('cameraApp', () => cameraApp);
```

### Props

#### `aspect`

Values: `Fit`, `Fill` (default), `Stretch`

The `aspect` prop allows you to define how your viewfinder renders the camera's view. For instance, if you have a square viewfinder and you want to fill the it entirely, you have two options: `Fill`, where the aspect ratio of the camera's view is preserved by cropping the view or `Stretch`, where the aspect ratio is skewed in order to fit the entire image inside the viewfinder. The other option is `Fit`, which ensures the camera's entire view fits inside your viewfinder without altering the aspect ratio.

#### `camera`

Values: `Front`, `Back` (default)

Use the `camera` prop to specify which camera to use.


#### `orientation`

Values: `LandscapeLeft`, `LandscapeRight`, `Portrait` (default), `PortraitUpsideDown`

The `orientation` prop allows you to specify the current orientation of the phone to ensure the viewfinder is "the right way up."

TODO: Add support for an `Auto` value to automatically adjust for orientation changes.


### Component methods

You can access component methods by adding a `ref` (ie. `ref="camera"`) prop to your `<Camera>` element, then you can use `this.refs.camera.switch()`, etc. inside your component.

#### `switch()`

The `switch()` method toggles between the `Front` and `Back` cameras.


#### `takePicture(callback)`

Basic implementation of image capture. This method is subject to change, but currently works by accepting a callback like `function(err, base64EncodedJpeg) { ... }`.
