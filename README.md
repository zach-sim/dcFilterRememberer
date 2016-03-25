# dcFilterRememberer
dcFilterRememberer is an add-on for dc.js.

It's only use is to store the current filters in the query string of the url. Allowing both sharing of the current view by copying the url and the ability to use the back button to undo filters.

This code has been tested on the following dc.js examples (2.0.0-beta.27):
- http://dc-js.github.io/dc.js/examples/filtering.html
- http://dc-js.github.io/dc.js/examples/scatter-brushing.html

# Basic Usage
Add
```javascript
dcFilterRememberer();
```
before
```javascript
dc.renderAll();
```

# Advanced Usage
Instead of immediately calling this function you can overwrite some internal functions before executing it.

Here is an example of overwriting encodeFilters & decodeFilters to utilise string compression from LZString.
```javascript
dcFilterRememberer.encodeFilters(function(filters) {
  return filters.length == 0 ? '' : LZString.compressToEncodedURIComponent(JSON.stringify(filters));
}).decodeFilters(function(encodedFilters) {
  return JSON.parse(LZString.decompressFromEncodedURIComponent(encodedFilters));
})();
```
