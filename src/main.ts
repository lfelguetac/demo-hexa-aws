const serverless = require('serverless-http');

import app from './infrastructure/server';

module.exports.handler = serverless(app);
