var express = require('express');
var router = express.Router();

const { checkBody } = require('../modules/checkBody');

const Trip = require('../models/trips');


/**
 * 	Récupérer les trajets avec paramètres departure arrival date
 *  trips :[]
 */
 router.post('/', (req, res) => {
    if (checkBody(req.body,['departure','arrival','date']))
    {
        // chercher dans l'intervalle de la journée
        // prendre la date recherchée 
        let searchDate=new Date(req.body.date)
        // prev = cette date mais a minuit
        let nextDate=new Date(req.body.date)
        let day=nextDate.getDate()+1
        nextDate.setDate(day)
        // next = le lendemain a minut
        
        Trip.find({
            departure:{ $regex: new RegExp(req.body.departure, 'i') },
            arrival:{ $regex: new RegExp(req.body.arrival, 'i') },
            date: {"$gte": `${searchDate}`, "$lt": `${nextDate}`} 
        }
        ).then((data) => {
            
            res.json({trips : data})
        })
    }
    else
    {
        res.json({result:false,error:'Champs manquants ou invalides'})
    }
})
	



module.exports = router;
