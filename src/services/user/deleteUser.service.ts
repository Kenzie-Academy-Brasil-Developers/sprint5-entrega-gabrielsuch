import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user/user.entity"


const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const findUser = users.find((user) => user.id === id)

    if(!findUser) {
        return {status: 404, message: {error: "User not found."}}
    }

    await userRepository.delete(findUser)

    return {status: 200, message: {message: "User Deleted!"}}
}


export default deleteUserService