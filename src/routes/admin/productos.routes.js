import { Router } from "express";
import controller from "../../controllers/productos.controller..js";
import { multerUpload } from "../../middlewares/image.middleware.js";


const router = Router()


router.get('/', controller.get)
router.get('/get/:id', controller.get)
router.get('/new', (req, res) => {
  res.render('sections/productos/add')
})

router.post('/add', multerUpload().single('foto') ,controller.add)



export default router