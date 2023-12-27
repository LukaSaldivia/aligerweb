import { Router } from "express";
import controller from "../../controllers/usuarios.controller.js";


const router = Router()

router.get('/', controller.get)
router.get('/get/:id', controller.get)
router.get('/new', (req, res) => {
  res.render('sections/usuarios/add')
})

router.get('/describe',controller.describe)

router.post('/register',controller.register)




export default router