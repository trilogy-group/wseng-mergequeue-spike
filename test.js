const assert = require('assert');
const { salute } = require('./lib');

assert.strictEqual(salute('world'), 'Hello, world');

const { banner } = require('./banner');
assert.strictEqual(banner(), 'Hello, team!');

console.log('ok: base checks passed');
