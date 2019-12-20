const express = require('express')
const massive = require('massive')
const pc = require('./controller')
require('dotenv').config()
const app = express()

const {DB_STRING} = process.env
massive(DB_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Connected to DB')
    })
    .catch(err => console.log('Connection failure', err))

app.use(express.json())

app.post('/api/product', pc.create)
app.get('/api/product/:id?', pc.read)
app.put('/api/product/:id', pc.update)
app.delete('/api/product/:id', pc.delete)

app.listen(4000, () => {
    console.log('Listening on port 4000')
})