import { Router } from "express";
import controller from "../../controllers/productos.controller..js";
import { adminOnly } from "../../middlewares/auth.middleware.js";


const router = Router()


router.get('/', controller.get)
router.get('/:id', controller.get)



export default router