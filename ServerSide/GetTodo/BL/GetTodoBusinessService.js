import TodoLoader from '../Loader/TodoLoader.js';

class GetTODOBusinessService{

    constructor(){}

    async Execute(id){
        return await new TodoLoader().Load(id);
    }
}

export default  GetTODOBusinessService 