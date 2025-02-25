import TodoStatusCommand from '../Data/TodoStatusCommand.js';

class TodoStatusUpdater{

    constructor(){}

    async Update(todo){
        return await new TodoStatusCommand().Update(todo);
    }
}

export default TodoStatusUpdater 