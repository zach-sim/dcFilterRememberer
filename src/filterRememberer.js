export default function () {
  var functions = this;
  var firstRender = true;
  var originalDcRenderAll = dc.renderAll;
  dc.renderAll = function(g) {
    if (firstRender) {
      //apply filters if set in query string
      var query_string = window.location.hash.substring(1);
      if (query_string.length > 0) {
        functions.applyFilters(functions.decodeFilters(query_string));
      };
    }
    originalDcRenderAll(g);
  }
  window.onpopstate = function(event) {
    //on going back pages clear and apply filters
    var query_string = window.location.hash.substring(1);
    dc.filterAll();
    if (query_string.length > 0) {
      functions.applyFilters(functions.decodeFilters(query_string));
    }
    dc.redrawAll();
  };
  dc.renderlet(function() {
    //global dc renderlet to encode filters to the query string
    var query_string = functions.encodeFilters(functions.getFilters());
    if (window.location.hash.substring(1) != query_string) {
      if (history.pushState) {
        history.pushState(null, null, '#' + query_string);
      } else {
        location.hash = query_string;
      }
    }
  })
}
