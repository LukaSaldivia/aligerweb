import model from "../models/productos.model.js"
import Controller from "./controller.js"
import path from "path"
import {fileURLToPath} from 'url';
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const controller = new Controller(model)

controller.getResults = async (req, res) => {
  let results = await controller.getJSON(req, res)
  if (!res.locals.isClient) {
    results.forEach(result => delete result.precio)
  }

  res.send(results)
}

controller.add = async (req,res) => {
  const {body} = req
  if (req.file) {
    
    let fn = req.file.filename
    let fnCompressed = fn.split('.')[0] +".jpeg" 
    body.foto = fnCompressed
    
    let pathUploads = path.join(__dirname,'/../','public','uploads','compressed', fnCompressed)
    sharp(req.file.path).resize(500,500).jpeg({
      quality: 80,
      chromaSubsampling : '4:4:4'
    }).toFile(pathUploads, () => true)
  }
    
    let result = await model.create(body)
    res.send(body)

  }

export default controller