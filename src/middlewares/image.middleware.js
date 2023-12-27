import multer from "multer"
import path from "path"
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


function multerUpload() {
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'/../','public','uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
  return multer({ storage })
  
}

export { multerUpload }