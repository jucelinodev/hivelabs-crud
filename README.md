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

- Para iniciar o servidor em modo de desenvolvimento:

```
$ npm run dev
```

- Para gerar uma build de produção:

```
$ npm run build
```

- Para iniciar servidor em produção após gerar a build:

```
$ npm start
```

# Recursos da API

### GET '/users

Retorna uma lista de usuários, se não existe nenhum retorna um array vazio

### GET '/users?nome=nomevalido'

Retorna uma lista de usuários filtrada pelo coluna "name", se não existir nenhum retorna um array vazio

### GET '/users?sobrenome=sobrenomevalido'

Retorna uma lista de usuários filtrada pela coluna "lastname", se não existir nenhum retorna um array vazio

### GET '/users?nome=nomevalido&sobrenome=sobrenomevalido'

Retorna uma lista de usuários filtrada pela coluna "name" e "lastname", se não existir nenhum retorna um array vazio

### GET '/users/:nickname'

Retorna um usuário pelo nickname. Se não existe retorna um erro.

### POST '/users'

Cria um usuário com nickname único e retonar o usuário criado. A bio é opcional. Exemplo de request:

```
{
	"name": "fulano",
	"lastname": "silva",
	"nickname": "fulano123",
	"address": "Rua do bobo, numero 0",
	"bio": "Uma pessoa normal"
}
```

### PUT '/users/:id'

Atualiza lastname ou address ou nickname, retorna usuário atualizado. Nickname precisa ser único. Exemplos de requests:

```
{
	"lastname": "souza",
	"address": "Rua atualizada",
}
```

Ou:

```
{
	"nickname": "fulano12345",
}
```

### DELETE '/users/:id'

Apaga um usuário do banco de dados pelo id e retorna uma mensagem de sucesso. Se não existir, retorna um erro.
