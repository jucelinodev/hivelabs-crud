import 'reflect-metadata'
import 'express-async-errors'
import './database'

import express from 'express'
import { router } from './routes'
import handleError from './app/middlewares/HandleError'

const app = express()

app.use(express.json())
app.use(router)
app.use(handleError)

const APP_HOST = process.env.APP_HOST || 'http://localhost'
const PORT = process.env.PORT || 3333

app.listen(PORT, () =>
  console.log(`Servidor executando em ${APP_HOST}:${PORT}`),
)
