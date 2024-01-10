export default class UserModel{
    constructor(userId, name, email, password){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static SignUp(name, email, password){
        const newUser = new UserModel(name, email, password);
        newUser.userId = users.length + 1;
        users.push(newUser);
        return newUser;
    }

    static SignIn(email, password){
        const user = users.find( (u) => u.email == email && u.password == password);
        return user;
    }



    static getall(){
        return users;
    }

    static add(post){
        post.id = posts.length + 1;
        return post
    }

}



let users = [{
    userId: 1,
    name: "Sumit",
    email: "sumit8692@gmail.com",
    password: "Password1",
}];