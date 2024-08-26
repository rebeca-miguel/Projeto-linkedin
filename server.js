const express = require('express')
const cors = require('cors')
const slug = require('slug')
const { v4: uuidv4 } = require('uuid')

const postsRouter = express.Router()
const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())


const listPosts = []

// deve ser capaz de criar um postes
postsRouter.post('/posts', (req, res) => {
    const { content, format, status, author } = req.body

    if (!content || !format || !status || !author) {
        return res.status(400).json({ message: 'Por favor, curta os meus postes' })
    }

    const newPost = {
        id: uuidv4(),
        content: content,
        format: format,
        status: status,
        created_at: new Date().toLocaleDateString('pt-BR'),
        author: author,
        slug: slug(content)
    }

    listPosts.push(newPost)
    res.status(201).json({ message: `Poste com ${newPost.id} criado com sucesso` })
})

//  deve ser capaz de listar todos  os postes
postsRouter.get('/posts', (req, res) => {
    res.status(200).json(listPosts)
})

//deve ser capaz de listar um poste especifica

postsRouter.get('/post', (req, res) => {
    const id = req.body.id

    const postFound = listPosts.find(post => post.id === id)

    if (!postFound) {
        return res.status(404).json({ message: `Poste com o id não encontrado!`})
    }

    res.json(postFound)
    
})

// deve ser capaz de editar um poste específico
postsRouter.patch('/post/:id', (req, res) => {
    const { id } = req.params
    const { content, format, status, author } = req.body

    
    const postFound = listPosts.find(post => post.id === id)


    if (!postFound) {
        return res.status(404).json({ message: `Poste com  ${id} não encontrado` })
    }


    if (content != null) {
        postFound.content = content
    }

    if (format != null) {
        postFound.format = format
    }

    if (status != null) {
        postFound.status = status
    }

    if (author != null) {
        postFound.author = author
    }

 
    res.json({ message: `Poste com ${id} editado com sucesso!`, post: postFound })
})

// deve ser capar de excluir um poste
postsRouter.delete('/post/:id', (req, res) => {
    const { id } = req.params

    const postUpdated = listPosts.filter(post => post.id !== id)

    res.json(postUpdated)


})

app.use(postsRouter)
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))