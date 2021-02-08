const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: '5432',
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    pool.query('SELECT FROM users WHERE id = $id', [id], (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    const { name, email } = req.body
    pool.query('UPDATE users SET name = $name, email = $email', [name, email], (error, results) => {
        if (error) {
            throw error
        }

        res.status(201).send(`User Created Successfully with ID: ${results.insertId}`)
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email } = req.body
    pool.query('INSERT INTO users (name, email) VALUES ($name, $email) WHERE id = $id', [name, email, id], (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send(`User Updated with ID: ${id}`)
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    pool.query('DELETE users WHERE id = $id', [id], (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send(`User Has Been Deleted with ID: ${id}`)
    })
}