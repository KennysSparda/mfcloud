# API MFCloud

E um backend onde encontra-se informacoes sobre os filmes, que sao elas: 
- Nome do filme 
- Data de lançamento 
- Duração 
- Direção 
- Elenco 
- Sinopse 
- Link para a página de stream. 

## Estrutura do Projeto 

A estrutura do projeto é organizada da seguinte forma: 
```bash 
src/ 
|-- controllers/ 
| |-- filmesController.js 
|-- models/ 
| |-- filmesModel.js 
|-- db.js 
|-- routes.js 
|-- server.js
```

## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina: 
- Node.js 
- npm (gerenciador de pacotes do Node.js) 
- MySQL 
## Configuração 

1. Clone o repositório: 
```bash
git clone https://github.com/KennysSparda/mfcloud 
cd mfcloud 
``` 

2. Instale as dependências: 
```bash
npm install
``` 

3. Configure o MySQL:

Instale o mysql, e execute no terminal
```bash
mysql -u <seu-usuario> -p<sua-senha>
```
Crie o banco de dados mfcloud
```sql
CREATE DATABASE mfcloud;
```
Selecione o banco de dados e crie a tabela dos filmes:
```sql
USE mfcloud;
CREATE TABLE filmes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  data VARCHAR(10),
  duracao VARCHAR(255),
  direcao VARCHAR(255),
  elenco VARCHAR(255),
  sinopse TEXT,
  link VARCHAR(255)
); 
```

4. Configure as variáveis de ambiente: 
Crie um arquivo .env na raiz do projeto com as seguintes variáveis: 
```env 
DB_HOST=seu-host 
DB_USER=seu-usuario
DB_PASS=sua-senha 
DB_NAME=seu-banco 
PORT=3000 
```
Substitua os valores conforme necessário. 

## Execução 
Inicie o servidor: 
```bash 
npm start 
``` 

O servidor estará rodando em http://localhost:3000/api/filmes/ 
## Testes
Para executar os testes, utilize o seguinte comando: 
```bash 
npm test 
``` 
## Encerramento 
Para encerrar o servidor, utilize Ctrl + C no terminal. 

## Tecnologias
- Javascript
- Node.js
- MySQL
- Express
- Jest

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests.

### Proximos passos:
- Fazer mais testes para os outros metodos: insert, put e delete, e testar outros cenários.
- Fazer um Procfile para integrar diretamente no Heroku
- Fazer um front-end para consumir essas informações



Autor: Kenny Vargas

