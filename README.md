# is-path-from-ancestor

[![NPM version](https://img.shields.io/npm/v/is-path-from-ancestor.svg)](https://www.npmjs.com/package/is-path-from-ancestor)
[![Build Status](https://travis-ci.org/shinnn/node-is-path-from-ancestor.svg?branch=master)](https://travis-ci.org/shinnn/node-is-path-from-ancestor)
[![Build status](https://ci.appveyor.com/api/projects/status/w7qwspaik2ad94vl?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-is-path-from-ancestor)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-is-path-from-ancestor.svg)](https://coveralls.io/r/shinnn/node-is-path-from-ancestor)

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

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install is-path-from-ancestor
```

## API

```javascript
const isPathFromAncestor = require('is-path-from-ancestor');
```

### isPathFromAncestor(*path*)

*path*: `String`  
Return: `Boolean`

It returns `true` if *path* starts with `../` (POSIX) or `..\\` (Windows), otherwise returns `false`.

It [normalizes](https://nodejs.org/api/path.html#path_path_normalize_p) the path before checking.

```javascript
// On POSIX

isPathFromAncestor('foo/../../'); //=> true
isPathFromAncestor('foo/../'); //=> false
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
