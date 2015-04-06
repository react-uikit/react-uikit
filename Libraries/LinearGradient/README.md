## LinearGradient

A `<LinearGradient>` component for react-native.

### Usage

1. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name" [(Screenshot)](http://url.brentvatne.ca/g9Wp).
2. Add `libRCTLinearGradient.a` to `Build Phases -> Link Binary With Libraries`
   [(Screenshot)](http://url.brentvatne.ca/g9Wp).
3. Click on `RCTLinearGradient.xcodeproj` in `Libraries` and go the `Build
   Phases` tab. Double click the text to the right of `Header Search
   Paths` and verify that it has `$(SRCROOT)../react-native/React` - if it
   isn't, then add it. This is so XCode is able to find the headers that
   the `RCTLinearGradient` source files are referring to by pointing to the
   header files installed within the `react-native` `node_modules`
   directory. [(Screenshot)](http://url.brentvatne.ca/7wE0).
4. Whenever you want to use it within React code now you can: `var LinearGradient =
   require('react-uikit/LinearGradient');`

## Example

```javascript
// Within your render function
<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
```

You can also use start and end points, as well as specify the locations
for the gradient color changes with the `start`, `end` and `locations`
props:

```javascript
<LinearGradient
  start={[0,0.25]} end={[0.5,1]}
  locations={[0,0.5,0.6]}
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
```
