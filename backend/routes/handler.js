const express = require('express');
const { SchemaTypes } = require('mongoose');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

/* Add one element to Database
router.get('/addUser', async (req, res) => {
    const user = {username: 'tigerhunterasdf', fullname: 'Alex Bong', followers: 4412};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created');
            res.end('New user created');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added');
    }
});
*/

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