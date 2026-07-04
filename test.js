const assert = require('assert');
const { salute } = require('./lib');

assert.strictEqual(salute('world'), 'Hello, world');

console.log('ok: base checks passed');
