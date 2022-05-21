import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user/user.entity"


const getUsersService = async () => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    return users

}


export default getUsersService