var express = require('express');
var router = express.Router();

const { checkBody } = require('../modules/checkBody');

const User = require('../models/users');


/**
 * 	Login user
 */
 router.post('/', (req, res) => {
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

module.exports = router;