import AllToDoQuery from '../Data/AllToDoQuery.js';

class AllTodoLoader{

    constructor(){}

    async Load(status){
        return await new AllToDoQuery().Select(status);
    }
}

export default AllTodoLoader 