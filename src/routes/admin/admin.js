import { Router } from 'express'
import usuariosRouter from './usuarios.routes.js'
import productosRouter from './productos.routes.js'
import { adminOnly } from '../../middlewares/auth.middleware.js'

const router = new Router()

router.use('/[A-Za-z0-9]+', adminOnly)

router.get('/', (req, res) => {
  res.send('landing admin')
})

router.use('/usuarios',usuariosRouter)
router.use('/productos',productosRouter)

export default router

