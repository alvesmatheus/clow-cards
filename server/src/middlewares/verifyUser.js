const verifyUser = (req, res, next) => {
    const userID = req.params.id;
    const userCheck = req.body.id;

    if (!userID)
        return res
            .status('400')
            .json({ error: `The user ID was not provided.` });

    if (userID.trim() !== userCheck)
        return res.status('401').json({
            error: `Access denied. You don't have permission to perform this action.`,
        });

    return next();
};

export default verifyUser;
