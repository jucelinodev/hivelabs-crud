import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'

const router = Router()
const userController = new UserController()

router.get('/users', userController.index)
router.post('/users', userController.store)
router.get('/users/:nickname', userController.show)
router.delete('/users/:id', userController.destroy)
router.put('/users/:id', userController.update)

export { router }
