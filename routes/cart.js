var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');
const Trip = require('../models/trips');

const { checkBody } = require('../modules/checkBody');

/**
 * 	Ajout trajet au panier avec paramètres id
 * 	{result}
 */
router.post('/add', (req, res) => {
    if (checkBody(req.body,['tripId']))
    {
       let newCart= new Cart({trip : req.body.tripId}) 
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
router.get('/', (req, res) => {
c
    Cart.find({}).populate('trip').then((data => {

        if (data != null)
        {
            res.json({result:true, carts : data})
        }
        else
        {
            res.json({result:false, error : "Pas de données"})
        }
    }))
})

/**
 * 	DeleteOne du panier
 */
router.delete('/deleteone/:cartId', (req, res) => {

    Cart.deleteOne({_id : req.params.cartId }).then((data => {

        res.json({result:true})
    }))
})


/**
 * 	DeleteAll du panier
 */
router.delete('/deleteall', (req, res) => {

    Cart.deleteMany({}).then((data => {

        res.json({result:true})
    }))
})





module.exports = router;
