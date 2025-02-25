import TodoUpdater from '../Updater/TodoUpdater.js';
import cache from '../../Cache/CacheService.js'
import eventEmitterClass from '../../IOC/eventEmitter.js'

class UpdateTodoBuisnessService{

    constructor(){}

    async Execute(todo){
        var result = await new TodoUpdater().Update(todo);

        cache.delCache(todo.id);
        eventEmitterClass.publishEvent("todoUpdated", todo);

        return result;
    }
}

export default  UpdateTodoBuisnessService 