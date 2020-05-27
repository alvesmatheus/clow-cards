import * as yup from 'yup';

import shapes from './shapes';

const validators = {
    check: {
        ID: yup.string().trim().required('The id was not provided.'),
        SIGNIN: yup.object().shape(shapes.check.SIGNIN),
    },
    create: {
        CARD: yup.object().shape(shapes.create.CARD),
        USER: yup.object().shape(shapes.create.USER),
    },
    update: {
        CARD: yup.object().shape(shapes.update.CARD),
        READING: yup.object().shape(shapes.update.READING),
        USER: yup.object().shape(shapes.update.USER),
    },
};

export default validators;
