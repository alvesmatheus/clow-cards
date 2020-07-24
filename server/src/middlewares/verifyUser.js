import { BAD_REQUEST, UNAUTHORIZED } from 'http-status-codes';

const verifyUser = (req, res, next) => {
    const { user } = req.params;
    const userVerifier = req.body.user;

    if (!user)
        return res
            .status(BAD_REQUEST)
            .json({ error: 'The user id was not provided.' });

    if (user.trim() !== userVerifier)
        return res.status(UNAUTHORIZED).json({
            error: `Access denied. You don't have permission to perform this action.`,
        });

    return next();
};

export default verifyUser;
