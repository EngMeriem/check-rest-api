const express = require('express');
const router = express.Router();

const User = require('../models/User');


/*****************************************************************************************************/
/*************************************    C[R]UD : READ     ******************************************/
/*****************************************************************************************************/

// GET :  RETURN ALL USERS 
router.get('/all-users', (req, res, next) => {
    User.find()
        .then((users) => {
        res.status(200).json(users);
        })
        .catch((error) => {
            res.status(400).json({error: error});
        });
});

/*****************************************************************************************************/
/**************************************   [C]RUD  : CREATE    ****************************************/
/*****************************************************************************************************/

// POST :  ADD A NEW USER TO THE DATABASE 
router.post('/new-user', (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(() => {
            res.status(201).json({message: 'User created and saved successfully!'});
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
});

/*****************************************************************************************************/
/***************************************   CR[U]D : UPDATE    ****************************************/
/*****************************************************************************************************/

// PUT : EDIT A USER BY ID 
router.put('/edit/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id},{...req.body})
    .then(() => {
        res.status(200).json({ message: 'User was modified successfully!' });
    })
    .catch((error) => {
        res.status(400).json({ error: error });
    });
});

/*****************************************************************************************************/
/************************************      CRU[D]  : DELETE     **************************************/
/*****************************************************************************************************/

// DELETE : REMOVE A USER BY ID
router.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndDelete({_id: req.params.id})
    .then( () => {
        res.status(200).json({ message : "User was deleted !" });
    })
    .catch( () => {
        res.status(404).json({ error });
    });
});

module.exports = router;