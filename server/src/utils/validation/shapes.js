import * as yup from 'yup';

const equalTo = (ref, errorMessage) => {
    const { path } = ref.path;
    return yup.mixed().test({
        name: 'equalTo',
        message: errorMessage || `${path} and ${ref} are not equal.`,
        params: {
            reference: ref.path,
        },
        test(value) {
            return value === this.resolve(ref);
        },
    });
};

yup.addMethod(yup.string, 'equalTo', equalTo);

const shapes = {
    check: {
        SIGNIN: {
            email: yup
                .string()
                .trim()
                .required('User email is missing.')
                .email('This is not an email address.'),
            password: yup.string().trim().required('User password is missing.'),
        },
    },

    create: {
        CARD: {
            name: yup.string().trim().required('Card name is missing.'),
            sign: yup.string().trim().required('Card sign is missing.'),
            origin: yup.string().trim().required('Card origin is missing.'),
            image: yup.string().trim().notRequired(),
            meaning: yup.string().trim().notRequired(),
        },
        USER: {
            fname: yup.string().trim().required('User first name is missing.'),
            sname: yup.string().trim().required('User surname is missing.'),
            email: yup
                .string()
                .trim()
                .required('User email is missing.')
                .email('This is not an email address.'),
            password: yup.string().trim().required('User password is missing.'),
            pswdCheck: yup
                .string()
                .trim()
                .required('Password confirmation is missing.')
                .equalTo(
                    yup.ref('password'),
                    '"Password" and "Confirm Password" does not match.'
                ),
        },
    },

    update: {
        CARD: {
            name: yup.string().trim().required('Card name is missing.'),
            sign: yup.string().trim().required('Card sign is missing.'),
            origin: yup.string().trim().required('Card origin is missing.'),
            image: yup.string().trim().required('Card image URL is missing.'),
            meaning: yup.string().trim().default('Not found.'),
        },
        READING: {
            comments: yup.string().trim().ensure(),
        },
        USER: {
            fname: yup.string().trim().required('User first name is missing.'),
            sname: yup.string().trim().required('User surname is missing.'),
            email: yup
                .string()
                .trim()
                .required('User email is missing.')
                .email('This is not an email address.'),
        },
    },
};

export default shapes;
