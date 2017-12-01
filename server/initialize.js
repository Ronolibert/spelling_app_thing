const nconf = require('nconf');

if (typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'development';
}

const DEFAULT_CONFIG = './server/config/defaults.json';

nconf.file('defaults', DEFAULT_CONFIG);
