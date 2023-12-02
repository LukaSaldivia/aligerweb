import { Router } from 'express'
import pageRouter from './pageRouter.js'

const router = new Router()

router.use('/',pageRouter)

export default router