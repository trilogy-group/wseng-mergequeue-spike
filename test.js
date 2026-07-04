const assert = require('assert');
const { greet } = require('./lib');

assert.strictEqual(greet('world'), 'Hello, world');

console.log('ok: base checks passed');
