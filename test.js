'use strict';

const {sep} = require('path');

const isPathFromAncestor = require('.');
const {test} = require('tape');

test('isPathFromAncestor', t => {
	t.equal(
		isPathFromAncestor(`..${sep}`),
		true,
		'should return true when the path starts with ancestor reference.'
	);

	t.equal(
		isPathFromAncestor('..'),
		false,
		'should return false when the path doesn\'t start with ancestor reference.'
	);

	t.equal(
		isPathFromAncestor(`foo${sep}..${sep}`),
		false,
		'should normalize the path before checking.'
	);

	t.throws(
		() => isPathFromAncestor(['foo']),
		/^TypeError.*Expected a file path \(<string>\).*but got \[ 'foo' \] \(array\)\./u,
		'should throw a type error when it takes a non-string argument.'
	);

	t.throws(
		() => isPathFromAncestor(),
		/^TypeError.*to check if it starts with parent directory reference \(\.\.\), but got undefined\./u,
		'should throw a type error when it takes no arguments.'
	);

	t.end();
});
