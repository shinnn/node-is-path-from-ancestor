/*!
 * is-path-from-ancestor | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/node-is-path-from-ancestor
*/

'use strict';

var path = require('path');

module.exports = function isPathFromAncestor(str) {
  if (typeof str !== 'string') {
    throw new TypeError(str + ' is not a string.');
  }

  return path.normalize(str).indexOf('..' + path.sep) === 0;
};
