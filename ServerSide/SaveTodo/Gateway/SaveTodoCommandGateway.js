import TodoBuilder from '../../Model/TodoBuilder.js';
import CreateTodoBuisnessService from '../BL/CreateTodoBuisnessService.js'
class SaveTodoCommandGateway{

    constructor(){}

    async Execute(req,res){
        var todo = new TodoBuilder().BuildFromRequest(req);
        var response = await new CreateTodoBuisnessService().Execute(todo);
        return {id: response };
    }
}

export default SaveTodoCommandGateway 