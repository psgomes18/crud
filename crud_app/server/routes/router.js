const express = require('express')
const route = express.Router()

const services = require('../services/render')

/* @description Root Route @method GET */
route.get('/', services.homeRoutes)

route.get('/', services.add_user)

route.get('/', services.update_user)

module.exports = route