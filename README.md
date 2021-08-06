# Desafio Hivelabs

API de cadastro de usuários desenvolvida para o desafio da Hivelabs.

### Requisitos

- [Nodejs](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Instalação:

- Clone o repositório:

```
$ git clone https://github.com/jucelinodev/hivelabs-crud.git
```

- Entre no diretório:

```
$ cd /hivelabs-crud
```

- Para instalar todas as dependências você deve rodar o seguinte comando:

```
$ npm install
```

- Renomeie "ormconfig.example.json" para "ormconfig.json" e entre com suas credenciais do Postgres:

```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "seu-usuário-postgres",
  "password": "sua-senha-postgres",
  "database": "hivelabs",
  "entities": ["./src/app/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

- Lembre-se de criar o banco de dados:

```
$ psql CREATE DATABASE hivelabs;
```

- Execute as migrações:

```
$ npm run typeorm migration:run
```

- Para inciar o servidor em modo de desenvolvimento:

```
$ npm run dev
```

- Para gerar uma build de produção:

```
$ npm run build
```

- Para iniciar servidor em modo produção após gerar a build:

```
$ npm start
```
