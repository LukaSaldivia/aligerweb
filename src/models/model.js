import db from '../database/db.js'
import { uuid } from 'uuidv4'

class Model{
  constructor(table_name = ''){
    this.db = db
    this.TABLE = table_name
  }

  async get(id=null){
    try {
      let [res] = await this.db.query(`SELECT * from ${this.TABLE} ${id ? `WHERE id = "${id}"` : ''}`)
      return res
    } catch (error) {
      return false
    }
  }

  async create(data){

    data.id = uuid()
    try {
      let insert = await this.db.query(`INSERT INTO ${this.TABLE} (${Object.keys(data)}) VALUES (?);`, [Object.values(data)])
      console.log(insert);
      return insert
    } catch (error) {
      return error
    }
  }

  async describe(){
    let result = (await this.db.query(`DESCRIBE ${this.TABLE}`))[0].map(o => o.Field)
    return result
  }
}

export default Model