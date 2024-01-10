export default class UserModel{
    constructor(userId, name, email, password){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getall(){
        return users;
    }

    static add(post){
        post.id = posts.length + 1;
        return post
    }

}



let users = [];