import express from 'express'
import morgan from 'morgan'
import path from 'path'
import {fileURLToPath} from 'url';
import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// Imports
import usuariosRouter from './routes/usuarios.js'


const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// Middlewares
app.use(morgan('dev'))

// Routes
app.use('/usuarios',usuariosRouter)

// Static files
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
  console.log('Server on port',app.get('port'));
})
