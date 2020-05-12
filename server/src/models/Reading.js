import { Schema, model } from 'mongoose';

const ReadingSchema = new Schema({
    method: {
        type: String,
        default: 'general',
        enum: ['general'],
    },
    date: {
        type: Date,
        required: true,
    },
    cards: {
        type: [{ type: Schema.Types.ObjectId, ref: 'cards' }],
        required: true,
    },
    comments: {
        type: String,
        default: '',
    },
});

const Reading = model('Reading', ReadingSchema);

export default Reading;
