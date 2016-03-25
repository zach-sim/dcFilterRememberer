import { default as filterRememberer } from './filterRememberer'
import { getFilters, applyFilters } from './dcHelpers'
import { encodeFilters, decodeFilters } from './convertFilters'
import {version} from "./../package.json";
var functions = {
    getFilters: getFilters,
    encodeFilters: encodeFilters,
    decodeFilters: decodeFilters,
    applyFilters: applyFilters
  },
  dcFilterRememberer = filterRememberer.bind(functions);
dcFilterRememberer.version = version;
Object.keys(functions).forEach(function(key) {
  dcFilterRememberer[key] = function(_) {
    if (!arguments.length) return functions[key];
    else if (typeof(_) === "function") functions[key] = _;
    else throw "[dcFilterRememberer] Unexpected input in getter/setter function";
    return dcFilterRememberer;
  };
});

export default dcFilterRememberer
