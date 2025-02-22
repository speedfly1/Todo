import TodoUpdater from '../Updater/TodoUpdater.js';
class UpdateTodoBuisnessService{

    constructor(){}

    async Execute(todo){
        return await new TodoUpdater().Update(todo);
    }
}

export default  UpdateTodoBuisnessService 