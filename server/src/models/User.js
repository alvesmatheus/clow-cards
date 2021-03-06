import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minlength: 1,
    },
    sname: {
        type: String,
        required: true,
        minlength: 1,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
});

const User = model('User', UserSchema);

export default User;
