const express = require('express');
const router = express.Router();
const gameSchema = require('../models/Game');

/**
 * Se crea el request POST en el archivo start-game con el objetivo de iniciar
 * el juego con la apuesta por cada jugador.
 * 
 * @version 1.00.00
 * 
 * @author Santiago Ospina Osorio <santiago.m200@outlook.es>
 * 
 * @since 1.00.000 28-02-2022
 */
router.post('/', (req, res, next) => {
   try { 
        const { id, gamerBet } = req.body;
        gameSchema.findOne({id:id})
        .then(data => {res.status(200).json({
            id: data.id,
            type: data.type,
            gamerBet: {
                1: {
                    id: data.gamers[0].id,
                    apuesta: gamerBet[0]
                },
                2: {
                    id: data.gamers[1].id,
                    apuesta: gamerBet[1]
                },
                3: {
                    id: data.gamers[2].id,
                    apuesta: gamerBet[2]
                }  
            }
        })})
        .catch(err => { res.status(404).json({
            message: 'El id no se encontro en la base de datos'
        })});

    } catch (error) {
        next(error);
    }    
})

module.exports = router;