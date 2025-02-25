import TodoSaver from '../Saver/TodoSaver.js';
import eventEmitterClass from '../../IOC/eventEmitter.js'

class CreateTodoBuisnessService{

    constructor(){}

    async Execute(todo){
        var result = await new TodoSaver().Save(todo);
        eventEmitterClass.publishEvent("todoUpdated", todo);
        return result;
    }
}

export default  CreateTodoBuisnessService 