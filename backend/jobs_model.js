const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'appId',
    password: 'password',
    port: 5432,
});

const getJobs = (req, res) => {
    pool.query('SELECT * FROM jobs ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const createJobs (body) => {
    return new Promise(function(resolve, reject) {
        const { name, date, phone_interview, face_interview, offer, company } = body
        pool.query('INSERT INTO jobs ()')
    })
}
