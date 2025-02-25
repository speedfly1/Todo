import MongoSingleton from '../../IOC/db.js'

class TodoCommand{

    constructor(){}

    async Delete(todoId){
        return await MongoSingleton.getClient().findByIdAndDelete(todoId);;
    }
}

export default TodoCommand