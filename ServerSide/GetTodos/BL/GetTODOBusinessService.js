import AllTodoLoader from '../Loaders/AllTodoLoader.js';
import cache from '../../Cache/CacheService.js'

class GetTODOBusinessService{

    constructor(){}

    async Execute(){
        const cachedData = cache.getCache("Todos");
        if(cachedData){
            return cachedData;
        }
        const todos = await new AllTodoLoader().Load();

        cache.setCache("Todos", todos);
        return todos;
    }
}

export default  GetTODOBusinessService 