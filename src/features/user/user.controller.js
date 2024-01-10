import UserModel from "./user.model.js";

export default class UserController {
    signUp(req,res){
        const {name, email, password} = req.body;
        const user = UserModel.SignUp(name, email, password);
        res.send(201).send(user);

    }

    signIn(req,res){
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).send("Incorrect Credentials");
        }else{
            res.send("Login Successful")
        }
        const user = UserModel.SignIn(email, password);
        res.send(201).send(user);
    }

}