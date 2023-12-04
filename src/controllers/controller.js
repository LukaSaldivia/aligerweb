class Controller{
  constructor(model){
    this.model = model
    this.getJSON = this.getJSON.bind(this);
    this.get = this.get.bind(this);
    this.describe = this.describe.bind(this);

  }

  async getJSON(req,res){
    let id = req.params.id
    let result = await this.model.get(id)
    return result
  }

  async get(req,res){
    let result = await this.getJSON(req,res)
    res.send(result)
  }

  async describe(req,res){
    let result = await this.model.describe()
    res.send(result)
  }
}

export default Controller