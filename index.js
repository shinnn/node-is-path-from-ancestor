'use strict';

const path = require('path');

const normalize = path.normalize;
const sep = path.sep;

const inspectWithKind = require('inspect-with-kind');

module.exports = function isPathFromAncestor(str) {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a file path (<string>) to check if it starts with parent directory reference (..), but got ${
			inspectWithKind(str)
		}.`);
	}

	return normalize(str).indexOf(`..${sep}`) === 0;
};
