import model from "../models/usuarios.model.js"
import Controller from "./controller.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const controller = new Controller(model)

controller.register = async (req, res) =>{
  const {body} = req
  const salt = await bcrypt.genSalt(10)
  const cryptedPassword = await bcrypt.hash(body.password,salt)
  body.password = cryptedPassword 
  let result = await model.create(body)
  res.redirect(req.baseUrl)
  
}

controller.login = async (req, res) =>{
  const {body} = req
  const [usuario] = await model.login(body.field)
  if (usuario) {
    const mismaPassword = await bcrypt.compare(body.password, usuario.password)

    if (mismaPassword) {
      // login
      const token = jwt.sign({id: usuario.id, tipo: usuario.tipo }, process.env.JWT_TOKEN, { expiresIn : "5h"});
      res.cookie("token",token,{
        httpOnly : true
      })

      res.redirect('/')
    }else{
      // distinta clave
      res.send('no')
    }
  }else{
    // no existe el usuario
    res.send('no existe')
  }
}


export default controller