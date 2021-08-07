import 'reflect-metadata'
import 'express-async-errors'
import './database'

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import handleError from './app/middlewares/HandleError'
import swaggerFile from './swagger.json'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)
app.use(handleError)

const APP_HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, () =>
  console.log(`Servidor executando em http://${APP_HOST}:${PORT}`),
)
