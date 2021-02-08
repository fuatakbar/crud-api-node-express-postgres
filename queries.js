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