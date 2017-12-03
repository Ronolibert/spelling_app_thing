const nconf = require('nconf');

if (typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'development';
}

const DEFAULT_CONFIG = './server/config/defaults.json';
const PRIVATE_CONFIG = './server/config/private.json';
nconf.file('private', PRIVATE_CONFIG).file('defaults', DEFAULT_CONFIG);
