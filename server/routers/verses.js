const express = require('express')
const router = express.Router()
const connection = require('../../database/index')

router.get('/', (req, res, next) => {
    const state = req.query.state;

    console.log('Verses GET request received with state :', state);

    connection.query('SELECT * FROM verses', (err, result) => {
        if (err) console.log("Error Verses " + error)
        else {
            if (result.length > 0) {
                res.send(result)
            }
        }

    })
})
module.exports = router