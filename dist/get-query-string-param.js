'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getQueryStringParam;

/**
 * Original Source: http://stackoverflow.com/a/901144/971592
 *
 * This method will get the value of a part of a query string in a given url
 *
 * @param {String} url - the url to get the value from
 * @param {String} name - The property from the query string
 * @return {String} - the value
 */

function getQueryStringParam(url, name) {
  var regexReadyName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + regexReadyName + '=([^&#]*)');
  var results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}