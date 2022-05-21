import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user/user.entity"


const getUserByIdService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const user = users.find((user) => user.id === id)

    if(!user) {
        return {status: 404, message: {error: "User not found."}}
    }

    const {password, ...removePassword} = user

    return {status: 200, message: removePassword}
}


export default getUserByIdService