import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user/user.entity"


const getUsersService = async () => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const removedPassword = users.map((user) => {
        const {password, ...removePassword} = user
        return removePassword
    })

    return removedPassword

}


export default getUsersService