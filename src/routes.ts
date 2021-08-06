import { Router, Request, Response } from 'express'
import { UserController } from './app/controllers/UserController'
import CreateUserValidator from './app/validators/CreateUserValidator'
import UpdateUserValidator from './app/validators/UpdateUserValidator'

const router = Router()
const userController = new UserController()

router.get('/users', userController.index)
router.post('/users', UpdateUserValidator, userController.store)
router.get('/users/:nickname', userController.show)
router.delete('/users/:id', userController.destroy)
router.put('/users/:id', UpdateUserValidator, userController.update)

export { router }
