import {ICreateUser} from "../../interfaces/index"
import { AppDataSource } from "../../data-source"
import {User} from "../../entities/user/user.entity"
import {v4 as uuid} from "uuid"
import bcrypt from "bcrypt"


const createUserService = async ({name, email, password, age}: ICreateUser) => {

    const userKeys = [name, email, password, age]
    const allowedKeys = ["name", "email", "password", "age"]

    for(let i=0 ; i<userKeys.length ; i++) {
        if(userKeys[i] === undefined) {
            return {status: 400, message: {error: "Wrong keys", allowed_keys: allowedKeys}}
        }
    }

    const userRepository = AppDataSource.getRepository(User)

    const hashPassword = bcrypt.hashSync(password, 10)

    const user = {
        id: uuid(),
        name: name,
        email: email,
        password: hashPassword,
        age: age,
        created_at: new Date(),
        updated_at: new Date()
    }

    userRepository.create(user)
    await userRepository.save(user)

    const {password: string, ...removedPassword} = user

    return {status: 201, message: removedPassword}
}


export default createUserService