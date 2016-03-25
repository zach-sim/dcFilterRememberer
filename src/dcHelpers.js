export function getFilters() {
  return dc.chartRegistry.list().map(function(chart, index) {
    return {
      key: index,
      value: chart.filters()
    };
  }).filter(function(o) {
    return o.value.length > 0;
  });
}

export function applyFilters(filters) {
  var charts = dc.chartRegistry.list();
  filters.forEach(function(object) {
    var chart = charts[object.key];
    object.value.forEach(function(filter) {
      if (Array.isArray(filter) && filter.length == 2) {
        chart.filter(dc.filters.RangedTwoDimensionalFilter.call(this, filter));
      } else {
        chart.filter(filter);
      }
    });
  });
}
