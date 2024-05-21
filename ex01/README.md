# Exercício 1

Bem vindos ao primeiro exercício. Nele temos as seguintes metas:

 - [ ] Aprender sobre o paradigma cliente-servidor
 - [ ] Aprender a diferença entre FrontEnd e BackEnd
 - [ ] Entender o conceito REST
 - [ ] Entender o que é uma API
 - [ ] Aprender o básico de HTML/CSS/SCSS
 - [ ] Aprender o básico de ao menos um framework FrontEnd
 - [ ] Aprender a desenvolver uma API

## Getting Started

Antes de começar, instale seu editor de códigos favorito. ~~VS Code (Cof Cof)~~
Instale também um gerenciador de banco de dados à sua escolha. Recomendo o [DBeaver](https://dbeaver.io/download/) mas fica ao gosto do freguês.

Antes de começar o seu código, tente conectar-se ao banco de dados pela primeira vez. Todas as informações importantes estão no **dockerfile** deste projeto. Happy hunting.

## Ok, conectei e agora?

Experimente inserir e apagar dados da tabela **contacts** usando [SQL](https://www.w3schools.com/sql/sql_intro.asp). Tente se familiarizar o máximo possível com essa linguagem. Não tenha medo de destruir o banco, na pior das hipóteses, basta deletar a pasta do repositório e clonar mais uma vez para começar de novo.

## Agora vamos ao exercício de verdade

Neste exercício começaremos a criar nossa lista de contato, dividindo-a em dois principais tópicos, **FrontEnd** e **BackEnd**

## Backend
O backend terá que realizar as seguintes tarefas:

 - [ ] Criar um endpoint que liste todos os contatos salvos no banco de dados
 - [ ] Criar um endpoint que adicione um novo contato ao banco de dados

São **obrigatórios** os seguintes pontos:

 - A tecnologia utilizada deve ser [NodeJS](https://nodejs.org/en)
 - As APIs devem ser construídas usando [ExpressJS](https://expressjs.com/)
 - Deve ser utilizado algum [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
	 - ORMs populares incluem [Prisma](https://www.prisma.io/), [Sequelize](https://sequelize.org/) e [Drizzle](https://orm.drizzle.team/)
 - Obrigatório o uso de [Typescript](https://www.typescriptlang.org/)

## Frontend
O frontend terá que realizar as seguintes tarefas:

 1. Criar uma tela para exibir todos os contatos cadastrados
 2. Criar uma tela para cadastrar um novo contato

São **obrigatórios** os seguintes pontos:

 - Deverá ser usado um framework de frontend dentre os listados:
	 - [Angular](https://angular.io/quick-start) | [React](https://vitejs.dev/guide/)
 - Neste momento **não é permitido** o uso de frameworks de CSS
 - Independente do framework selecionado, é obrigatório o uso de [Typescript](https://www.typescriptlang.org/)

## Pontos de atenção
**Typescript** é uma linguagem **tipada** que *permite* o uso de variáveis fracamente tipadas. Variáveis que não possuem tipo ou que fazem uso de tipos implícitos, são chamadas de variáveis do tipo **any**. Em **todos** projetos (frontend e backend), é **expressamente proibido o uso do tipo any!**

### Happy Coding!
