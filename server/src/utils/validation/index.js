import { BAD_REQUEST } from 'http-status-codes';
import createError from 'http-errors';

export { default as validators } from './validators';

export const validate = (data, validator) =>
    validator.validate(data).catch((error) => {
        throw createError(BAD_REQUEST, error.errors[0]);
    });
