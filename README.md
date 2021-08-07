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

# Documentação Swagger

- A documentação fica na raiz "/" da api. Você pode acessar localmente por http://localhost:3333/

- Foi feita com Swagger para oferecer uma maior praticidade ao testar as requisições

- Certifique-se de ter o banco de dados ativo e rodar as migrações antes de testar as rotas
