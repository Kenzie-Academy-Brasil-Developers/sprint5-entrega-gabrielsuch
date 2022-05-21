import {Request, Response, NextFunction} from "express"

import { AppDataSource } from "../data-source"
import { User } from "../entities/user/user.entity"


const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => { 
    const {email} = req.body

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const findEmail = users.find((user) => user.email === email)

    if(findEmail) {
        return res.status(409).json({error: "Email already exists"})
    }

    next()
}


export default verifyEmailExistsMiddleware