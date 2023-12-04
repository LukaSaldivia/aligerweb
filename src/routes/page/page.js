import { Router } from 'express'
import indexRouter from './index.js'
import aboutRouter from './about.js'
import loginRouter from './login.js'
import { loggedIn } from '../../middlewares/auth.middleware.js'

const router = new Router()

router.use('/[A-Za-z0-9]+', loggedIn)

router.use('/',indexRouter)
router.use('/about', aboutRouter)
router.use('/login',loginRouter)

export default router