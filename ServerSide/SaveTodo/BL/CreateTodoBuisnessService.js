import TodoSaver from '../Saver/TodoSaver.js';
class CreateTodoBuisnessService{

    constructor(){}

    async Execute(todo){
        return await new TodoSaver().Save(todo);
    }
}

export default  CreateTodoBuisnessService 