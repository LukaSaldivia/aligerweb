import { Router } from 'express'
import usuariosRouter from './usuarios.js'

const router = new Router()

router.all('*', (req, res, next) => {

  let b = true

  if (b) {
    next()
  }else{
    res.redirect('/')
  }

})

router.get('/', (req, res) => {
  res.send('landing admin')
})

router.use('/usuarios',usuariosRouter)

export default router

