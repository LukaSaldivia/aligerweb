import { Router } from "express";
import controller from "../controllers/usuarios.js";

// console.log(controller);


const router = Router()

router.get('/', controller.get)
router.get('/:id', controller.get)



export default router