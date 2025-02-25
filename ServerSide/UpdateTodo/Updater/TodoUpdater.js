import TodoCommand from '../Data/TodoCommand.js';

class TodoUpdater{

    constructor(){}

    async Update(todo){
        return await new TodoCommand().Update(todo);
    }
}

export default TodoUpdater 