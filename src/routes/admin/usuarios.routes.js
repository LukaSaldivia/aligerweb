import { Router } from "express";
import controller from "../../controllers/usuarios.controller.js";
import { adminOnly } from "../../middlewares/auth.middleware.js";


const router = Router()

router.get('/', controller.get)
router.get('/get/:id', controller.get)
router.get('/form', (req, res) => {
  res.render('form')
})

router.get('/describe',controller.describe)

router.post('/register',controller.register)




export default router