import TodoDeleter from '../Deleter/TodoDeleter.js';
import eventEmitterClass from '../../IOC/eventEmitter.js'

class DeleteTodoBusinessService{

    constructor(){}

    async Execute(id){
        var result = await new TodoDeleter().Delete(id);
        eventEmitterClass.publishEvent("todoUpdated");
        return result;
    }
}

export default  DeleteTodoBusinessService 