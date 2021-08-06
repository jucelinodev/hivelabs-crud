import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import User from '../models/User'
import UserRepository from '../repositories/UserRepository'

export class UserController {
  async store(req: Request, res: Response) {
    const userRepo = getCustomRepository(UserRepository)
    const { name, lastname, nickname, address, bio } = req.body

    const user = await userRepo.createUser({
      name,
      lastname,
      nickname,
      address,
      bio,
    })

    return res.status(201).json({ user })
  }
}
