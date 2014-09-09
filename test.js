'use strict';

var sep = require('path').sep;

var isPathFromAncestor = require('require-main')();
var test = require('tape');

test('isPathFromAncestor', function(t) {
  t.plan(4);

  t.ok(
    isPathFromAncestor('..' + sep) === true,
    'should return true when the path starts with ancestor reference.'
  );

  t.ok(
    isPathFromAncestor('..') === false,
    'should return false when the path doesn\'t start with ancestor reference.'
  );

  t.ok(
    isPathFromAncestor('foo' + sep + '..' + sep) === false,
    'should normalize the path before checking.'
  );

  t.throws(
    isPathFromAncestor.bind(null, ['foo']), /TypeError/,
    'should throw a type error when the argument is not a string.'
  );
});
