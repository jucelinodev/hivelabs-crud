import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'

const router = Router()
const userController = new UserController()

router.get('/', (req: Request, res: Response) => {
  return res.json({
    msg: 'API is running',
  })
})

router.post('/users', userController.store)

export { router }
