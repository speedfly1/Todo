import TODO from './TODO.js'
class TodoBuilder{

    constructor(){}

    BuildFromRequest(req){
        var todo = new TODO();
        todo.id = req.body.id;
        todo.name = req.body.name;
        todo.description = req.body.description;
        todo.status = req.body.status;
        return todo;
    }

}

export default TodoBuilder 