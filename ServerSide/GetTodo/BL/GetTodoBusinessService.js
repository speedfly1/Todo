import TodoLoader from '../Loader/TodoLoader.js';
import cache from '../../Cache/CacheService.js'

class GetTODOBusinessService{

    constructor(){}

    async Execute(id){

        const cachedData = cache.getCache(id);
        if(cachedData){
            return null;
        }
        
        var todo = await new TodoLoader().Load(id);
        cache.setCache(id, todo);

        return todo;
    }
}

export default  GetTODOBusinessService 