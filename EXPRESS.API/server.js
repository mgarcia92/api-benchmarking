'use strict'

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.get('/api/hello', function (req, res) {
  res.json({ hello: 'world' })
})

app.listen(3001)