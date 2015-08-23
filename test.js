'use strong';

const {sep} = require('path');

const isPathFromAncestor = require('./');
const {test} = require('tape');

test('isPathFromAncestor', t => {
  t.plan(6);

  t.equal(isPathFromAncestor.name, 'isPathFromAncestor', 'should have a function name.');

  t.strictEqual(
    isPathFromAncestor(`..${sep}`),
    true,
    'should return true when the path starts with ancestor reference.'
  );

  t.strictEqual(
    isPathFromAncestor('..'),
    false,
    'should return false when the path doesn\'t start with ancestor reference.'
  );

  t.strictEqual(
    isPathFromAncestor(`foo${sep}..${sep}`),
    false,
    'should normalize the path before checking.'
  );

  t.throws(
    () => isPathFromAncestor(['foo']),
    /TypeError.* is not a string/,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => isPathFromAncestor(),
    /TypeError/,
    'should throw a type error when it takes no arguments.'
  );
});
