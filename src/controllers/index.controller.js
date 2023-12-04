import model from "../models/productos.model.js"
import Controller from "./controller.js"


const controller = new Controller(model)

controller.get = async(req, res) => {
  let result = await controller.getJSON(req,res)
  if (res.locals.removePrices) {
    result.forEach(product => {
      delete product.precio
      delete product.id
      delete product.stock
    })
  }
  res.send(result)
}


export default controller