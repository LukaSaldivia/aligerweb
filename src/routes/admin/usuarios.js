import { Router } from "express";
import controller from "../../controllers/usuarios.js";


const router = Router()

router.get('/', controller.get)
router.get('/:id', controller.get)



export default router