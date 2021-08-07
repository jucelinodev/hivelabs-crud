module.exports = {
  type: 'postgres',
  host: process.env.HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    process.env.NODE_ENV === 'production'
      ? './dist/app/models/*.js'
      : './src/app/models/*.ts',
  ],
  migrations: [
    process.env.NODE_ENV === 'production'
      ? './dist/database/migrations/*.js'
      : './src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: './src/database/migrations',
  },
}
