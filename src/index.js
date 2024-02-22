require('dotenv').config()

const express = require('express')

const cors = require('cors')
const rotas = require('./rotas')

const app = express()

app.use(express.json())
app.use(rotas)

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT_SERVER}`);
})