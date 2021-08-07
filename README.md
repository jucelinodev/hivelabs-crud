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

- Renomeie ".env.example" para ".env" e configure com seu usuário e senha do Postgres:

```
# Server
HOST=localhost
PORT=3333

# Database
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=5432
POSTGRES_DB=hivelabs
```

- Lembre-se de ter um serviço do Postgres ativo e criar o banco de dados:

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

### Executar com docker-compose:

- Necessário ter o docker e o docker-compose instalado na sua máquina. Clone o projeto, configure o .env e instale as dependências (npm install)

- Certifique-se de que a porta 5432 não esteja ocupada por outro serviço ou container, ou que tenha containers com nomes repetidos

- Também é possível mudar o redirecionamento da porta no arquivo docker-compose.yml

- Para subir os containers pela primeira vez usando docker-compose, digite:

```
$ docker-compose up --build
```

- Para subir os containers sem fazer a build, digite:

```
$ docker-compose up
```

- Para matar os containers:

```
$ docker-compose down
```

- Não esqueça de rodar as migrações. É necessário que os containers existam e estejam rodando, abra outro terminal e digite o comando:

```
$ npm run typeorm migration:run
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
