# is-path-from-ancestor

[![npm version](https://img.shields.io/npm/v/is-path-from-ancestor.svg)](https://www.npmjs.com/package/is-path-from-ancestor)
[![Build Status](https://travis-ci.com/shinnn/node-is-path-from-ancestor.svg?branch=master)](https://travis-ci.com/shinnn/node-is-path-from-ancestor)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-is-path-from-ancestor.svg)](https://coveralls.io/github/shinnn/node-is-path-from-ancestor)

A [Node.js](https://nodejs.org/) module to check if a given path starts with parent directory reference

```javascript
const isPathFromAncestor = require('is-path-from-ancestor');

// On POSIX
isPathFromAncestor('../foo'); //=> true
isPathFromAncestor('foo'); //=> false

// On Windows
isPathFromAncestor('..\\foo'); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-path-from-ancestor
```

## API

```javascript
const isPathFromAncestor = require('is-path-from-ancestor');
```

### isPathFromAncestor(*path*)

*path*: `string`  
Return: `boolean`

It returns `true` if *path* starts with `../` (POSIX) or `..\\` (Windows), otherwise returns `false`.

It [normalizes](https://nodejs.org/api/path.html#path_path_normalize_p) the path before checking.

```javascript
// On POSIX

isPathFromAncestor('foo/../../'); //=> true
isPathFromAncestor('foo/../'); //=> false
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
