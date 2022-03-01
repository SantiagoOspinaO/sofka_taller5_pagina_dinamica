const express = require('express');
const router = express.Router();
const gameSchema = require('../models/Game');

/**
 * Se crea el request GET en el archivo consult-game-status con el objetivo de hacer
 * una peticion a la base de datos para consultar el juego y su estado.
 * 
 * @version 1.00.00
 * 
 * @author Santiago Ospina Osorio <santiago.m200@outlook.es>
 * 
 * @since 1.00.000 28-02-2022
 */
router.get('/:id', (req, res, next) => {
    try {

        const { id } = req.params;
        gameSchema
        .findOne({id:id})
        .then(data => {res.status(200).json({
            id: data.id,
            gamers: {
                a: {
                    id: data.gamers[0].id,
                    name: data.gamers[0].name
                }, 
                b: {
                    id: data.gamers[1].id,
                    name: data.gamers[1].name
                },
                c: {
                    id: data.gamers[2].id,
                    name: data.gamers[2].name
                }
            },
            inProgress: false,
            winner: {
                id: data.gamers[1].id,
                name: data.gamers[1].name
            }
        })})
        .catch(err => { res.status(404).json({
            message: 'El id no se encontro en la base de datos'
        })});

    } catch (error) {
        next(error);
    }
    
});

/**
 * Se crea el request GET en el archivo consult-game-status con el objetivo de hacer
 * una peticion a la base de datos para consultar el gandor de un juego especifico.
 * 
 * @version 1.00.00
 * 
 * @author Santiago Ospina Osorio <santiago.m200@outlook.es>
 * 
 * @since 1.00.000 28-02-2022
 */
router.get('/:id/winner', (req, res, next) => {

    try {

        const { id } = req.params;
        gameSchema
        .findOne({id:id})
        .then(data => {res.status(200).json({
            winner: {
                id: data.gamers[1].id,
                name: data.gamers[1].name
            }
        })})
        .catch(err => { res.status(404).json({
            message: 'El id no se encontro en la base de datos'
        })});
        
    } catch (error) {
        next(error)
    }
    
})

module.exports = router;