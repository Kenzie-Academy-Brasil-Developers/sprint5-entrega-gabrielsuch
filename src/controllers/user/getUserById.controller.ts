import {Request, Response} from "express"

import getUserByIdService from "../../services/user/getUserById.service"


const getUserByIdController = async (req: Request, res: Response) => {
    const {id} = req.params

    const user = await getUserByIdService(id)

    return res.status(user.status).json(user.message)
}


export default getUserByIdController