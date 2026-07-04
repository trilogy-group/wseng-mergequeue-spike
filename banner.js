const { salute } = require('./lib');

function banner() {
  return `${salute('team')}!`;
}

module.exports = { banner };
