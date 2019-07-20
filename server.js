import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()
const PORT = process.env.PORT || 3000;

// setup route 
const APP_DIR = `${__dirname}/src/routes`
const features = fs.readdirSync(APP_DIR).filter(
    file => fs.statSync(`${APP_DIR}`)
)
features.forEach(features => {
    const router = express.Router()
    const routes = require(`${APP_DIR}/${features}`)
    let path = features.split('.js')[0]
    routes.setup(router)
    app.use(`/${path}`, router)
})

// setup bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// setup Access-Control
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.listen(PORT,()=>{
  console.log(`server start port ${PORT}`)
})
