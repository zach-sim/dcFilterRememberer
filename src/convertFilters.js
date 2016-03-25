export function encodeFilters(filters) {
  return filters.length === 0 ? '' : window.btoa(escape(JSON.stringify(filters)));
}

export function decodeFilters(encodedFilters) {
  return JSON.parse(unescape(window.atob(encodedFilters)));
}
