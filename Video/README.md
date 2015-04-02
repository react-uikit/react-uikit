## Video

A <Video> component for react-native.

### Usage

1. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name".
2. Add `libRTCVideo.a` to `Build Phases -> Link Binary With Libraries`.
3. Click on `RCTVideo.xcodeproj` in `Libraries` and go the `Build
   Phases` tab. Double click the text to the right of `Header Search
   Paths` and verify that it has `$(SRCROOT)../react-native/React` - if it
   isn't, then add it. This is so XCode is able to find the headers that
   the `RCTVideo` source files are referring to by pointing to the
   header files installed within the `react-native` `node_modules`
   directory. [(Screenshot)](http://url.brentvatne.ca/7wE0).
4. Whenever you want to use it within React code now you can: `var Video =
   require('react-uikit/Video');`


## Example

```javascript
// Within your render function, assuming you have a file called
// "background.mp4" in your project
<Video source={"background"} style={styles.backgroundVideo} repeat={true} />

// Later on in your styles..
var styles = Stylesheet.create({
  backgroundVideo: {
    resizeMode: 'cover', // stretch and contain also supported
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
```
