import model from "../models/productos.model.js"
import Controller from "./controller.js"


const controller = new Controller(model)

// controller.getName = async (req, res) => {
//   let result = await controller.getJSON(req, res)
//  res.send(result.nombre)
// }

controller.getResults = async (req, res) => {
  let results = await controller.getJSON(req, res)
  if (!res.locals.isClient) {
    results.forEach(result => delete result.precio)
  }

  res.send(results)
}


export default controller