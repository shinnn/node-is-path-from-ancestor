/*!
 * is-path-from-ancestor | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/node-is-path-from-ancestor
*/

'use strict';

var path = require('path');

module.exports = function isPathFromAncestor(str) {
  return path.normalize(str).indexOf('..' + path.sep) === 0;
};
