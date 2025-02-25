import MongoSingleton from '../../IOC/db.js'

class TodoCommand{

    constructor(){}

    async Update(todo){
        await MongoSingleton.getClient().findByIdAndUpdate(todo.id,todo);
        return true;
    }
}

export default TodoCommand