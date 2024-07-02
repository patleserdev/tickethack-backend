var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

const { checkBody } = require('../modules/checkBody');
/**
 * 	Ajout trajet au panier avec paramètres id
 * 	{result}
 */
router.post('/add', (req, res) => {
    if (checkBody(req.body,['tripId']))
    {
       newCart= new Cart({tripId : req.body.tripId}) 
        newCart.save().then((data) => {
            if(data != null)
            {
                res.json({result:true})
            }
            else
            {
                res.json({result:false,error:'Erreur lors de l\'enregistement'})
            }        
        })
    }
    else
    {
        res.json({result:false,error:'Champs manquants ou invalides'})
    }
})


/***
 * 	Récupérer tous les éléments du panier
 * 	{result, cart}
 */

/**
 * 	DeleteAll du panier
 */

// router.post('/signin', (req, res) => {
// }
	



module.exports = router;
