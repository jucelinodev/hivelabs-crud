import User from '../models/User'
import {
  DeleteResult,
  EntityRepository,
  Repository,
  UpdateResult,
} from 'typeorm'
import { CreateUserDto } from '../dtos/CreateUserDto'
import { UpdateUserDto } from '../dtos/UpdateUserDto'
import CustomError from '../utils/CustomError'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async createUser(data: CreateUserDto): Promise<User> {
    const user = this.create(data)
    const userSaved = await this.save(user)
    return userSaved
  }

  public async findByNickname(nickname: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { nickname: nickname } })
    return user
  }

  public async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id)

    if (!user) {
      throw new CustomError('Não existe usuário cadastrado com esse id', 404)
    }

    this.merge(user, data)
    const userUpdated = await this.save(user)
    return userUpdated
  }

  public async deleteUser(id: string): Promise<DeleteResult> {
    return await this.delete(id)
  }
}

export default UserRepository
