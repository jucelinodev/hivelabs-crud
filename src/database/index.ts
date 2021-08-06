import { createConnection } from 'typeorm'

async function startTypeORM() {
  try {
    await createConnection()
    console.log('TypeORM conectado com sucesso')
  } catch (error) {
    console.log(error)
  }
}

startTypeORM()
