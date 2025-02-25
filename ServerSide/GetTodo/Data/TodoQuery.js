import MongoSingleton from '../../IOC/db.js'

class TodoQuery{

    constructor(){}

    async Select(id){
        return MongoSingleton.getClient().findById(id);
    }
}

export default TodoQuery