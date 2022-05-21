import { IUpdateUser } from "../../interfaces"

import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user/user.entity"

import bcrypt from "bcrypt"


const updateUserService = async (id: string, body: IUpdateUser) => {
    const allowedKeys = ["name", "email", "password", "age"]
    
    try {
        const userRepository = AppDataSource.getRepository(User)
        const users = await userRepository.find()

        const getUser = users.find((user) => user.id === id)

        if(!getUser) {
            return {status: 404, message: {error: "User doesn't exists!"}}
        }

        if(body.password) {
            body.password = bcrypt.hashSync(body.password, 10)
        }

        body.updated_at = new Date()

        await userRepository.update(getUser, body)

        return {status: 200, message: {message: "User Updated!"}}
    }
    catch(err) {
        return {status: 400, message: {error: "Invalid Key inserted", allowed_keys: allowedKeys}}
    }
}


export default updateUserService