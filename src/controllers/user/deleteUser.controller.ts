import {Request, Response} from "express"

import deleteUserService from "../../services/user/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
    const {id} = req.params

    const user = await deleteUserService(id)

    return res.status(user.status).json(user.message)
}


export default deleteUserController