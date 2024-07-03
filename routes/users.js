var express = require('express');
var router = express.Router();

const { checkBody } = require('../modules/checkBody');

const User = require('../models/users');


/**
 * 	Get user cart
 */
router.get('/cart/:username', (req, res) => {
    const username = req.params.username;
    if (username)
    {
        //Recherche user        
        User.find({
            name:{ $regex: new RegExp(username, 'i') }
        }
        ).then((data) => {
            console.log(data)
            if (data.length != 0)
            {
                res.json({result:true, cart : data.cart})
            }
            else
            {
                res.json({result:false, error : "L'utilisateur n'existe pas"})
            }
            
        })
    }
    else
    {
        res.json({result:false, error:'Champs manquants ou invalides'})
    }
})

/**
 * 	Get user bookings
 */
router.get('/bookings/:username', (req, res) => {
    const username = req.params.username;
    if (username)
    {
        //Recherche user        
        User.find({
            name:{ $regex: new RegExp(username, 'i') }
        }
        ).then((data) => {
            console.log(data)
            if (data.length != 0)
            {
                res.json({result:true, cart : data.bookings})
            }
            else
            {
                res.json({result:false, error : "L'utilisateur n'existe pas"})
            }
            
        })
    }
    else
    {
        res.json({result:false, error:'Champs manquants ou invalides'})
    }
})

/**
 * 	Login user
 */
 router.post('/login', (req, res) => {
    const {name,password,email} = req.body;

    if (checkBody(req.body,['email','password']))
    {
        //Recherche user        
        User.find({
            email:{ $regex: new RegExp(email, 'i') },
            password:{ $regex: new RegExp(password, 'i') },
        }
        ).then((data) => {
            console.log(data)
            if (data.length != 0)
            {
                res.json({result:true, user : data})
            }
            else
            {
                res.json({result:false, error : "Paramètres d'authentification inexactes"})
            }
            
        })
    }
    else
    {
        res.json({result:false, error:'Champs manquants ou invalides'})
    }
})

/**
 * 	Sign Up user
 */
router.post('/signup', (req, res) => {
    const {name,password,email} = req.body;
    const newUser = new User ({
        name:name,
        password:password,
        email:email,
    });
    if (checkBody(req.body,['name','email','password']))
    {
        //Save user
        newUser.save()
        .then(data => {
            console.log(data);
            if (data.length != 0)
            {
                res.json({result:true, user : data})
            }
            else
            {
                res.json({result:false, error : "Création utilisateurs impossible"})
            }
        })
    }
    else
    {
        res.json({result:false, error:'Champs manquants ou invalides'})
    }
})

module.exports = router;