import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import User from '../models/User'
import UserRepository from '../repositories/UserRepository'
import CustomError from '../utils/CustomError'

export class UserController {
  async store(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)
    const { name, lastname, nickname, address, bio } = req.body

    const userExist = await userRepo.findByNickname(nickname)

    if (userExist) {
      throw new CustomError(
        'Já existe um usuário cadastrado com esse nickname',
        409
      )
    }

    const user = await userRepo.createUser({
      name,
      lastname,
      nickname,
      address,
      bio,
    })

    return res.status(201).json({ user })
  }

  async show(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)
    const { nickname } = req.params

    const user = await userRepo.findByNickname(nickname)

    if (!user) {
      throw new CustomError(
        'Não existe usuário cadastrado com esse nickname',
        404
      )
    }

    return res.status(200).json({ user })
  }

  async update(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)

    const { id } = req.params
    const { lastname, nickname, address } = req.body

    if (nickname) {
      const useExist = await userRepo.findByNickname(nickname)
      if (useExist) {
        throw new CustomError(
          'Já existe um usuário cadastrado com esse nickname',
          409
        )
      }
    }

    const user = await userRepo.updateUser(id, req.body)

    return res.status(200).json({ user })
  }

  async destroy(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)
    const { id } = req.params

    const user = await userRepo.findOne(id)

    if (!user) {
      throw new CustomError('Não existe usuário cadastrado com esse id', 404)
    }

    await userRepo.deleteUser(id)

    return res.status(200).json({ msg: 'Usuario deletado com sucesso!' })
  }
}
