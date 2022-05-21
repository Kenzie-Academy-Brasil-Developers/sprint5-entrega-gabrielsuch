import {Request, Response} from "express"

import updateUserService from "../../services/user/updateUser.service"


const updateUserController = async (req: Request, res: Response) => {
    const {id} = req.params

    const user = await updateUserService(id, req.body)

    return res.status(user.status).json(user.message)
}


export default updateUserController