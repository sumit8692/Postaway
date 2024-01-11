class UserModel {
    constructor(userId, name, email, password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static SignUp(name, email, password) {
        const newUser = new UserModel(users.length + 1, name, email, password);
        users.push(newUser);
        return newUser;
    }

    static SignIn(email, password) {
        const user = users.find((u) => u.email === email && u.password === password);
        return user;
    }

    static getAll() {
        return users;
    }
}

let users = [new UserModel(1, "sumit", "sumit@gmail.com", "Password"),
new UserModel(2, "amit", "amit@gmail.com", "Password1"),
new UserModel(3, "roku", "roku@gmail.com", "Password2")
];

export default UserModel;
