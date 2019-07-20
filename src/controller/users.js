import model from '../model/users'
const UsersController = {
    getAll(req,res) {
        model.find()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
    },
    selected(req,res) {
        model.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
    },
    insert(req,res) {
        model.save(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
    },
    update(req,res) {
        model.update(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
    },
    delete(req,res) {
        model.delete(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
    }
}
export default UsersController