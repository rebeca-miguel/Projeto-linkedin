# Projeto API-Linkedin

## Instruções de instalação

### Requisitos:
* Node.js 
* Github

Ao começar o projeto, prinmeiro precisou-se criar um pasta chamada linkedin-api, como sugestão, crie no terminal com o comando:
```mkdir linkedin-api```
cd linkedin-api

Para inicializa o projeto em Nodejs, utilize o comando:
```npm init -y ```prermite a criação do package.json, onde constam algumas extenções que facilitam o nosso projeto rodar de forma dinámica.

Instalação de algumas fremowork como: eexpress, nodemom, cors, uuid e slug, usamos o comando, 

```npm install nodemom, cors, uuid e slug``` usamos o comando, na dúvida, instale uma por cada vez.

## No projeto linkedin usei as seguintes fremework:
* Node.js
* Express
 * Cors
* uuid
* Slug

## Funcionalidades da API
* Criar um novo post
* Listar todos os posts
* Listar um post específico por id
* Editar um post existente
* Excluir um post


Para que seu código rode de forma simples e fácil rodando pelo terminal,  altere o arquivo script na pasta package
<=> iniciar o servidor e usar a API
      ```start": "nodemon server.js" ```

## Instruçoes de uso
1. Crie a porta localhost/3333
2. Abra o navegador web para testar
3. Faça os testes no insomnia/postman


## Rotas da API e métodos HTTP

### Criar um Post
Método: POST
URL: /api/posts

![Criar um poste](https://github.com/user-attachments/assets/1f8c612e-96d3-4628-8f1d-c2eee97e8914)

### Listar Todos os Posts
Método: GET
URL: /api/posts

![Capturar-listar](https://github.com/user-attachments/assets/58ae39b6-a26b-4268-a1ed-3bb775579235)

### Listar um Post Específico
Método: GET
URL: /api/posts/:id
Parâmetros da URL: id - ID do post

![Listar um poste](https://github.com/user-attachments/assets/f8a759fb-e09e-4e63-b3d6-edb8491155cd)


### Editar um Post
Método: PATCH
URL: /api/posts/:id
Parâmetros da URL: id - ID do post

![Capturar-editar](https://github.com/user-attachments/assets/fb7b6d4e-3838-4e13-a749-05c3abe7f811)


### Excluir um Post
Método: DELETE
URL: /api/posts/:id
Parâmetros da URL: id - ID do post


![Capturar-delete](https://github.com/user-attachments/assets/98deb035-693f-4482-a2d0-5b70e5b62880)


## Você pode aprender sobre essas fremework estudando , nos seguintes links abaixo:
.Links, recomendo:
.SLUG e UUID


### Descrições

Enquanto construia o meu projeto com o Node.js, aprendi alguns conseitos novos que me ajudaram a tornar o projeto mais dinámico e fácil de se ler.
Por isso, a importancia de documentar sobre como foi esse momento e tudo que aprendi até aqui.

### Slug
O slug é uma parte fundamental da URL de uma página e desempenha um papel importante tanto para o SEO quanto para a experiência do usuário. 
Ao criar slugs bem construídos, você ajuda os mecanismos de busca a entenderem seu conteúdo e facilita a navegação do seu site.

### uuid
é um número de 128 bits utilizado para identificar de forma única informações em sistemas de computação.
Imagine-o como um "RG" universal, garantindo que cada elemento, seja um arquivo, um registro em um banco de dados ou qualquer outro objeto digital, tenha uma identidade única e inconfundível, mesmo em sistemas diferentes e distribuídos globalmente.

### NPM

É uma ferramenta essencial para desenvolvedores JavaScript que simplifica enormemente a gestão de bibliotecas e módulos em seus projetos. 
Imagine o NPM como um supermercado online para desenvolvedores, onde você pode encontrar e instalar milhares de pacotes de código prontos para uso.

### Rotas
são como os endereços de uma aplicação web. Elas definem os caminhos específicos que um usuário pode seguir dentro de um site ou aplicativo.
Pense nelas como as diferentes páginas ou seções de um site, cada uma com sua própria URL única.

### Exemplos: 
1. Estude sobre os tópicos asseguir:
2. Como criar rotas dinâmicas
3. Como lidar com diferentes métodos HTTP (GET, POST, PUT, DELETE)
Como proteger suas rotas

