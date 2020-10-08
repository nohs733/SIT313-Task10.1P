const express = require('express');

const router = express.Router();

const Worker = require('../models/worker');

router.post('/save', (req, res) => {
    const data = req.body;

    const newWorker = new Worker(data);

    newWorker.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Server errors' });
            return;
        }
        return res.json({
            msg: 'Data has been saved'
        });
    });
});

module.exports = router;