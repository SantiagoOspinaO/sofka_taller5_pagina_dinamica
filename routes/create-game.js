const express = require('express');
const router = express.Router();

const gameSchema = require('../models/Game');

/**
 * Se crea el request GET en el archivo create-game con el objetivo de hacer una
 * peticion para renderizar la view con pug de createGame.
 * 
 * @version 1.00.00
 * 
 * @author Santiago Ospina Osorio <santiago.m200@outlook.es>
 * 
 * @since 1.00.000 28-02-2022
 */
router.get('/', function (req, res, next) {
    try {

        res.render('createGame');
        
    } catch (error) {
        next(error);
    }
    
}); 

/**
 * Se crea el request POST en el archivo create-game con el objetivo de hacer una
 * peticion para pedir el nombre de tres jugadores, esto va a almacenar en la base
 * de datosun id, tipo y el arreglo con los nombres ingresados.
 * 
 * @version 1.00.00
 * 
 * @author Santiago Ospina Osorio <santiago.m200@outlook.es>
 * 
 * @since 1.00.000 28-02-2022
 */
router.post('/', (req, res, next) => {
   try { 
        const { namePlayer } = req.body;
        const game = new gameSchema ({
            gamers: [ 
                {name: namePlayer[0]},
                {name: namePlayer[1]},
                {name: namePlayer[2]}
            ]
        });
        game.save()
            .then(data => {res.status(201).json({
                id: data.id,
                type: data.type,
                gamers: namePlayer
            })})
            .catch(err => {console.log(err)})

    } catch (error) {
        next(error);
    }    
})

module.exports = router;
