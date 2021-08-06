module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: 'hivelabs',
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
