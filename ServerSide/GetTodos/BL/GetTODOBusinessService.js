import AllTodoLoader from '../Loaders/AllTodoLoader.js';

class GetTODOBusinessService{

    constructor(){}

    async Execute(req){
        const loader = new AllTodoLoader();
        return await loader.Load();
    }
}

export default  GetTODOBusinessService 