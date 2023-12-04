import { Router } from "express";
import controller from "../../controllers/productos.controller..js"

const router = new Router()

router.get('/', (req, res) =>{
  res.render('index')
})

router.get('/resultados',controller.getResults)

export default router