import TodoCommand from '../Data/TodoCommand.js';

class TodoSaver{

    constructor(){}

    async Save(todo){
        return await new TodoCommand().Save(todo);
    }
}

export default TodoSaver 