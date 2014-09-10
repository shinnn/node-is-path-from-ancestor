# is-path-from-ancestor

[![NPM version](https://badge.fury.io/js/is-path-from-ancestor.svg)](https://www.npmjs.org/package/is-path-from-ancestor)
[![Build Status](https://travis-ci.org/shinnn/node-is-path-from-ancestor.svg?branch=master)](https://travis-ci.org/shinnn/node-is-path-from-ancestor)
[![Build status](https://ci.appveyor.com/api/projects/status/w7qwspaik2ad94vl)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-is-path-from-ancestor)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-is-path-from-ancestor.svg)](https://coveralls.io/r/shinnn/node-is-path-from-ancestor)
[![devDependency Status](https://david-dm.org/shinnn/node-is-path-from-ancestor/dev-status.svg)](https://david-dm.org/shinnn/node-is-path-from-ancestor#info=devDependencies)

A [Node][node] module to check if one path starts with parent directory reference

```javascript
var isPathFromAncestor = require('is-path-from-ancestor');

// On *nix
isPathFromAncestor('../foo'); //=> true
isPathFromAncestor('foo'); //=> false

// On Windows
isPathFromAncestor('..\\foo'); //=> true
```

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html). (Make sure you have installed [Node][node])

```
npm install --save is-path-from-ancestor
```

## API

```javascript
var isPathFromAncestor = require('is-path-from-ancestor');
```

### isPathFromAncestor(*path*)

*path*: `String`  
Return: `Boolean`

It returns `true` if *path* starts with `../` (*nix) or `..\\` (Windows), otherwise returns `false`.

It normalizes the path before checking. 

```javascript
// On *nix

isPathFromAncestor('foo/../../'); //=> true
isPathFromAncestor('foo/../'); //=> false
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[node]: http://nodejs.org/
