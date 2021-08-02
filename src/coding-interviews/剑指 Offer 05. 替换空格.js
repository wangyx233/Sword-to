/**
 * @param {string} s
 * @return {string}
 */
// js的api
var replaceSpace = function (s) {
  return s.replaceAll(' ', '%20');
};

// js的api
var replaceSpace = function (s) {
  return s.split(' ').join('%20');
};