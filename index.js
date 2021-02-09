const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// import query
const users = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({
        info: 'Node JS, Express and Postgres API'
    })
})

app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)
app.put('/users/:id', users.updateUser)
app.delete('/users/:id', users.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

