import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

function loggedIn(req, res, next) {
  let token = req.cookies.token
  res.locals.isClient = true
  if (!token) {
    res.locals.isClient = false
    return next()
  }

  try {


    const verified = jwt.verify(token,process.env.JWT_TOKEN)
    
    req.user = verified
    next()
  } catch (error) {
    res.clearCookie('token')
    res.redirect('/')
  }
}

async function adminOnly(req, res, next) {
  if (!req.user || req.user.tipo != 2) {
    return res.status(400).redirect('/')
  }

  next()
}


export { loggedIn, adminOnly}