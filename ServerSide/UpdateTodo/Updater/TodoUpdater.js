import TodoCommand from '../Data/TodoCommand.js';

class TodoUpdater{

    constructor(){}

    async Save(todo){
        return await new TodoCommand().Save(todo);
    }
}

export default TodoUpdater 