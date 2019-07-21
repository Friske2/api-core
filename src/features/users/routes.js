import controller from './controller'
export function setup(router) {
    router.get('/',controller.getAll)
    router.get('/:id',controller.selected)
    router.post('/',controller.insert)
    router.put('/',controller.update)
    router.delete('/:id',controller.delete)
}