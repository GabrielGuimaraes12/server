import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'

// Controllers
import Logar from './Controllers/Users/Logar.js'
import Logado from './Controllers/Users/Logado.js'
import Deslogar from './Controllers/Users/Deslogar.js'

//database
import Database from './Database/index.js'


//APP
const app =express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/Pages', express.static(path.dirname + '/pages'))



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