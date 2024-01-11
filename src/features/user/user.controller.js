import UserModel from "./user.model.js";

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
            // Move this line inside the else block
            res.send("Login Successful");
        }
        // Move the next two lines outside of the else block
        const user = UserModel.SignIn(email, password);
        // Use status(201) instead of send(201)
        res.status(201).send(user);
    }
}
