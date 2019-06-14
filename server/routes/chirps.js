const express = require('express');
const chirpstore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpstore.GetChirp(id));
    } else {
        res.send(chirpstore.GetChirps);
    }
});

router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.sendStatus(200);
})

module.exports = router;