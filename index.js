'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    giphinateHandler = require('./lib/handlers/giphinate'),
    app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
.get('/:queryText', giphinateHandler.getRequest)
.delete('/:queryText',giphinateHandler.deleteRequest)

.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`)
})
