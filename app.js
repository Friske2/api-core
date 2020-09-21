import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
// import './connect';

const app = express();
const PORT = process.env.PORT || 3000;
const baseUrl = `/api/v1`;

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup Access-Control
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(function(error, req, res, next) {
  if (error instanceof SyntaxError) {
    // Handle SyntaxError here.
    return res.status(500).send({ data: 'Invalid data' });
  } else {
    next();
  }
});

// setup route
const APP_DIR = `${__dirname}/src/app`;
const features = fs
  .readdirSync(APP_DIR)
  .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory());
features.forEach(features => {
  const router = express.Router();
  const routes = require(`${APP_DIR}/${features}/routes.js`);
  routes.setup(router);
  app.use(`${baseUrl}/${features}`, router);
});

app.listen(PORT, () => {
  console.log(`server start port ${PORT}`);
});
