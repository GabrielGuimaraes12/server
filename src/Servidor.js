const express = require('express')
const cors = require('cors')
const bobyParser = require('boby-parser')
const cookieParser = require('cookie-parser')
// Controllers
const Logar = require('./Controllers/Users/Logar')
const Logado = require('./Controllers/Users/Logado')
const Deslogar = require('./Controllers/Users/Deslogar.js')
//APP
const app =express()
app.use(cors())
app.use(bobyParser.json())
app.use(cookieParser())
app.use('/Pages', express.static(__dirname+'/pages'))

//database
const Database = require('./Database')

//pages
app.get('/', (req, res) => res.sendFile(__dirname+'/Pages/Index/Index.html'))
app.get('/privad', Logado, (req, res) => res.send('Somentes usuarios logados podem ver isso'))


//routes
app.post('/api/users/logar', async (req, res)=>{
    res.send(await Logar(req.body))
})
app.get('/api/users/deslogar', async (req, res)=>{
    res.send(await Deslogar())
})




//port
app.listen(3030, () => {
    console.log('Servidor online.')
})