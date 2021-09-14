const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'You are for scuba?' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})
