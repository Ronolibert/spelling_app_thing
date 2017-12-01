const path = require('path');
const express = require('express');
const nconf = require('nconf');
const bodyParser = require('body-parser');

require('./initialize');

const app = express();

const rootDir = path.join(__dirname, '../');

app.set('port', nconf.get('PORT') || 5000);

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(nconf.get('PORT'), () => {
  console.log(`Listening on port: ${nconf.get('PORT')}`);
  console.log(`Running in ${process.env.NODE_ENV}`);
});
