import User from '../models/User'
import { EntityRepository, Repository } from 'typeorm'
import { CreateUserDto } from '../dtos/CreateUserDto'

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
}

export default UserRepository
