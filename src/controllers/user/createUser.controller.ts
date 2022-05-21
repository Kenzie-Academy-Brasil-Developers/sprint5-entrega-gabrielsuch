import {Request, Response} from "express"

import createUserService from "../../services/user/createUser.service"


const createUserController = async (req: Request, res: Response) => {
    const {name, email, password, age} = req.body

    const user = await createUserService({name, email, password, age})

    return res.status(user.status).json(user.message)
}


export default createUserController