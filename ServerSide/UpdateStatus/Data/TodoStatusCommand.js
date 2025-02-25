import MongoSingleton from '../../IOC/db.js'

class TodoStatusCommand{

    constructor(){}

    async Update(todo){
        await MongoSingleton.getClient().findByIdAndUpdate(todo.id,{status: todo.status});
        return true;
    }
}

export default TodoStatusCommand