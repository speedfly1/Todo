import TodoBuilder from '../../Model/TodoBuilder.js';
import UpdateTodoBuisnessService from '../BL/UpdateTodoBuisnessService.js'
class UpdateTodoCommandGateway{

    constructor(){}

    async Execute(req,res){
        var todo = new TodoBuilder().BuildFromRequest(req);
        var response = await new UpdateTodoBuisnessService().Execute(todo);
        return true;
    }
}

export default UpdateTodoCommandGateway 