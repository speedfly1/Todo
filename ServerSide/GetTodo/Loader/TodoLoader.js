import TodoQuery from '../Data/TodoQuery.js';

class TodoLoader{

    constructor(){}

    async Load(id){
        return await new TodoQuery().Select(id);
    }
}

export default TodoLoader 