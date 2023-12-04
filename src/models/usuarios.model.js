import Model from "./model.js";

const model = new Model('usuarios')

model.login = async (field) => {
  try{
  let row = await model.db.query(`SELECT * from ${model.TABLE} WHERE username = ? OR mail = ? OR telefono = ?`,[field,field,field]) 
    return row[0]
  }catch(error){
    return null
  }
}


export default model