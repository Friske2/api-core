import express from 'express'
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

app.listen(PORT,()=>{
  console.log(`server start port ${PORT}`)
})
