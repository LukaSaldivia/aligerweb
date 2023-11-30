class Controller{
  constructor(model){
    this.model = model
    this.get = this.get.bind(this);

  }

  async get(req,res){
    let id = req.params.id
    let result = await this.model.get(id)
    res.send(JSON.stringify(result))
  }
}

export default Controller