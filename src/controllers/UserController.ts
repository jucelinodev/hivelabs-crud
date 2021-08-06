import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import CustomError from '../utils/CustomError'

export class UserController {
  async index(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)

    /* Os nomes das querys estão em português da mesma 
       forma que foi pedido no desafio (nome,sobrenome) */

    const { nome, sobrenome } = req.query

    if (nome && sobrenome) {
      const users = await userRepo.findByFullName(nome, sobrenome)
      res.json({ users })
    }

    if (nome) {
      const users = await userRepo.findByName(nome)
      res.json({ users })
    }

    if (sobrenome) {
      const users = await userRepo.findByLastName(sobrenome)
      res.json({ users })
    }

    const user = await userRepo.findAllUsers()
    res.json({ user })
  }

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
