import TodoStatusUpdater from '../Updater/TodoStatusUpdater.js';
import eventEmitterClass from '../../IOC/eventEmitter.js'

class UpdateTodoStatusBuisnessService{

    constructor(){}

    async Execute(todo){
        var result = await new TodoStatusUpdater().Update(todo);
        eventEmitterClass.publishEvent("todoUpdated", todo);
        return result;
    }
}

export default  UpdateTodoStatusBuisnessService 