import { Schema, model } from 'mongoose';

const ReadingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    date: {
        type: Date,
        required: true,
    },
    cards: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
        required: true,
    },
    comments: {
        type: String,
        default: '',
    },
});

const Reading = model('Reading', ReadingSchema);

export default Reading;
