import { Schema, model } from 'mongoose';

const CardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sign: {
        type: String,
        default: 'Unknown',
        enum: ['Sun', 'Moon', 'Star', 'Unknown'],
    },
    origin: {
        type: String,
        default: 'Unknown',
        enum: ['Eastern Magic', 'Western Magic', 'Unknown'],
    },
    image: {
        type: String,
        default: 'cards/rear-face.jpg',
    },
    meaning: {
        type: String,
        default: 'Not found.',
    },
});

const Card = model('Card', CardSchema);

export default Card;
