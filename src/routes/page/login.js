import { Router } from "express";
import controller from "../../controllers/usuarios.controller.js"

const router = Router()

router.get('/', (req, res) => {
  res.render('sections/usuarios/login')
})

router.get('/o',(req, res) => {
  res.locals.isClient = false
  res.clearCookie('token')
  res.redirect('/')
})

router.post('/', controller.login)

export default router