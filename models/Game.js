const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');
const { v4: uuidv4 } = require('uuid');

/**
 * 
 */
const gameSchema = new Schema ({

    id: {
        type: String,
        default: uuidv4()
    },
    type: {
        type: String,
        default: ""
    },
    gamers: [{
        id: {
            type: String,
            default: uuidv4() 
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'El nombre es requerido']
        }
    }],
    inProgress: {
        type: Boolean,
        default: true
    },
    winner: {
        id: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    }

}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = mongoose.model('Game', gameSchema);
