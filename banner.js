const { greet } = require('./lib');

function banner() {
  return `${greet('team')}!`;
}

module.exports = { banner };
