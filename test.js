'use strict';

var sep = require('path').sep;

var isPathFromAncestor = require('./');
var test = require('tape');

test('isPathFromAncestor', function(t) {
  t.plan(5);

  t.equal(isPathFromAncestor.name, 'isPathFromAncestor', 'should have a function name.');

  t.strictEqual(
    isPathFromAncestor('..' + sep),
    true,
    'should return true when the path starts with ancestor reference.'
  );

  t.strictEqual(
    isPathFromAncestor('..'),
    false,
    'should return false when the path doesn\'t start with ancestor reference.'
  );

  t.strictEqual(
    isPathFromAncestor('foo' + sep + '..' + sep),
    false,
    'should normalize the path before checking.'
  );

  t.throws(
    isPathFromAncestor.bind(null, ['foo']),
    /TypeError.* is not a string/,
    'should throw a type error when it takes a non-string argument.'
  );
});
