'use strict';

const path = require('path');
const util = require('util');

module.exports = function isPathFromAncestor(str) {
  if (typeof str !== 'string') {
    throw new TypeError(
      util.inspect(str) +
      ' is not a string. The first argument to is-path-from-ancestor must be a file path.'
    );
  }

  return path.normalize(str).indexOf('..' + path.sep) === 0;
};
