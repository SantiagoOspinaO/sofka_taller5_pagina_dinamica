## SOFKA Taller caso práctico de una página dinámica.

## Descripcion:
En este proyecto se trata de dar solución al taller 5 de la Cantera Nivel II de Sofka Technologies donde se califica el uso de NodeJS con Express y la base de datos
MongoDB además del modelo MVC.  
  
  
  
## Ejercicio:

### Se pide un request POST para la creacion del juego.  
* POST http://localhost:3000/createGame 
* BODY
<pre>
{
    "id": "72e14c37-231c-46e8-9b26-fab879ca9992",
    "type": "",
    "gamers": 
      [
        "Camilo",
        "Cristian",
        "Daniela"
     ]
}
</pre>

### Request para consultar el juego y su estado  
* GET http://localhost:3000/game/72e14c37-231c-46e8-9b26-fab879ca9992 
* BODY 
<pre>
{
    "id": "72e14c37-231c-46e8-9b26-fab879ca9992",
    "gamers": {
        "49e033a5-eadc-4085-a15b-ea3f374c5975": {
            "id": "49e033a5-eadc-4085-a15b-ea3f374c5975",
            "name": "Camilo"
        },
        "49e033a5-eadc-4085-a15b-ea3f374c5975": {
            "id": "49e033a5-eadc-4085-a15b-ea3f374c5975",
            "name": "Cristian"
        },
        "49e033a5-eadc-4085-a15b-ea3f374c5975": {
            "id": "49e033a5-eadc-4085-a15b-ea3f374c5975",
            "name": "Daniela"
        }
    },
    "inProgress": false,
    "winner": {
        "id": "49e033a5-eadc-4085-a15b-ea3f374c5975",
        "name": "Cristian"
    }
}
</pre>

### Request para determinar el ganador del juego  
* GET http://localhost:3000/game/72e14c37-231c-46e8-9b26-fab879ca9992/winner  
* BODY
<pre>
  {
      "id": "49e033a5-eadc-4085-a15b-ea3f374c5975",
      "name": "Cristian"
  }
 </pre>


### Request para iniciar el juego con la apuesta por cada jugador  
* POST http://localhost:3000/startGame  
* BODY
<pre>
{
    "id": "72e14c37-231c-46e8-9b26-fab879ca9992",
    "type": "",
    "gamerBet": {
        "c57bee5d-ce6b-4ae8-a17b-d7e160e35555": 3,
        "c57bee5d-ce6b-4ae8-a17b-d7e160e35555": 6,
        "c57bee5d-ce6b-4ae8-a17b-d7e160e35555": 5
    }
}
</pre>
  
## Contribuidor:
* Santiago Ospina Osorio - santiago.m200@outlook.es
