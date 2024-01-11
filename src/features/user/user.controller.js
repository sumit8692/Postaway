import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';
export default class UserController {
    signUp(req, res) {
        const { name, email, password } = req.body;
        const user = UserModel.SignUp(name, email, password);
        // Use status(201) instead of send(201)
        res.status(201).send(user);
    }

    signIn(req, res) {
        const { email, password } = req.body;
        const validate = UserModel.SignIn(email, password);
        if (!validate) {
            // Use status(400) instead of send
            return res.status(400).send("Incorrect Credentials");
        } else {
           const token = jwt.sign({userId: validate.userId, email: validate.email}, "tY4FT1KMV8",{
            expiresIn: '1h',
           })
            return res.status(200).send(token);
        }
       
    
    }
}
