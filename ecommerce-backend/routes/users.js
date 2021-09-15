const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.send(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

// Middleware

module.exports = router;