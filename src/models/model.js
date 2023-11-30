import db from '../database/db.js'

class Model{
  constructor(table_name = ''){
    this.TABLE = table_name
  }

  async get(id=null){
    try {
      console.log(this.TABLE);
      let [res] = await db.query(`SELECT * from ${this.TABLE} ${id ? `WHERE id = "${id}"` : ''}`)
      return res
    } catch (error) {
      return false
    }
  }
}

export default Model