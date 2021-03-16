const express = require('express')
const route = express.Router()

const services = require('../services/render')

/* @description Root Route @method GET */
route.get('/', services.homeRoutes)

/* @description Add User @method GET */
route.get('/', services.add_user)

/* @description Update User @method GET */
route.get('/', services.update_user)

module.exports = route