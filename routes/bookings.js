var express = require('express');
var router = express.Router();

const { checkBody } = require('../modules/checkBody');

const Booking = require('../models/bookings');

/**
 * 	Ajout trajet au panier avec paramètres id
 * 	{result}
 */
router.post('/add', (req, res) => {
    if (checkBody(req.body,['tripId']))
    {
       let newBooking= new Booking({trip : req.body.tripId}) 
       newBooking.save().then((data) => {
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

/**
 * 	Ajout plusieurs trajets au panier 
 * 	{result}
 */
router.post('/addMany', (req, res) => {
    req.body.tripIds
    if (checkBody(req.body,['tripIds']))
    {
        let counter=0
        let trips=req.body.tripIds
        Booking.insertMany(req.body.tripIds).then((data) => {
            if(data != null)
            {
                res.json({result:true,message:'Multiple enregistrement effectué !'})
            }
            else
            {
                res.json({result:false,error:'Erreur lors des enregistements'})
            }  
        })
       
    }
    else
    {
        res.json({result:false,error:'Champs manquants ou invalides'})
    }
})

	
/***
 * 	Récupérer tous les éléments du booking
 * 	{result, booking}
 */
router.get('/', (req, res) => {

    Booking.find({}).populate('trip').then((data => {

        if (data != null)
        {
            res.json({result:true, bookings : data})
        }
        else
        {
            res.json({result:false, error : "Pas de données"})
        }
    }))
})



module.exports = router;
