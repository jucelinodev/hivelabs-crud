import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    msg: 'API is running',
  })
})

const APP_HOST = process.env.APP_HOST || 'http://localhost'
const PORT = process.env.PORT || 3333

app.listen(PORT, () =>
  console.log(`Servidor executando em ${APP_HOST}:${PORT}`)
)
