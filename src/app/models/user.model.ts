// Object models in TypeScript are Interfaces
export interface UserModel {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    repeatpassword?: String,
    _id?: String,
}
