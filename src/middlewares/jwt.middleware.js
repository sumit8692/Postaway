import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
    //Read the token
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).send("Unauthorized");
    }

    try{
        const payload = jwt.verify(token,
            "tY4FT1KMV8"
            );
        req.userId = payload.userId;
    }
    catch(err){
        return res.status(401).send("Unauthorized");
    }

    next();

}

export default jwtAuth;