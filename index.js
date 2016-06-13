'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./lib/routes'),
    giphinateHandler = require('../lib/handlers/giphinate'),
    app = express()

app
.use(bodyParser)
.get('/:queryText', giphinateHandler)

.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`)
})
