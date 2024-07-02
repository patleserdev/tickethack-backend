var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');


/**
 * 	Ajout trajet au panier avec paramètres id
 * 	{result}
 */
router.post('/cart/add', (req, res) => {
    if (checkBody(req.body,['tripId']))
    {
       
       newCart= new Cart({tripId : req.body.tripId}) 
   
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
