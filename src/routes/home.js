export function setup(router) {
    router.get('/',(req,res)=>{
        res.send('hello')
    })
    router.get('/:id',(req,res)=>{
        res.send('hello : '+req.params.id)
    })
}