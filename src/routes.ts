import { Router } from 'express'
import { UserController } from './app/controllers/UserController'
import CreateUserValidator from './app/validators/CreateUserValidator'
import UpdateUserValidator from './app/validators/UpdateUserValidator'
import IdValidator from './app/validators/IdValidator'

const router = Router()
const userController = new UserController()

router.get('/users', userController.index)
router.post('/users', CreateUserValidator, userController.store)
router.get('/users/:nickname', userController.show)
router.delete('/users/:id', IdValidator, userController.destroy)
router.put(
  '/users/:id',
  IdValidator,
  UpdateUserValidator,
  userController.update,
)

export { router }
