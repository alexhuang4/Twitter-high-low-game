const express = require('express');
const { SchemaTypes } = require('mongoose');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/user1', async (req, res) => {
    const users = Schemas.Users;

    const userInfo = await users.aggregate([ { $sample: { size: 2 } } ], (err, userData) => {
        if(err) {
            throw err;
        }
        if(userData) {
            res.end(JSON.stringify(userData[0]));
        } else {
            res.end();
        }
    });
});

router.get('/user2', async (req, res) => {
    const users = Schemas.Users;
    
    const userInfo = await users.aggregate([ { $sample: { size: 1 } } ], (err, userData) => {
        if(err) {
            throw err;
        }
        if(userData) {
            res.end(JSON.stringify(userData[0]));
        } else {
            res.end();
        }
    });
});

module.exports = router;