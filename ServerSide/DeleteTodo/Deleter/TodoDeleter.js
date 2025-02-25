import TodoCommand from '../Data/TodoCommand.js';

class TodoLoader{

    constructor(){}

    async Delete(id){
        return await new TodoCommand().Delete(id);
    }
}

export default TodoLoader 