import DeleteTodoBusinessService from '../BL/DeleteTodoBusinessService.js'
class DeleteTodoCommandGateway{

    constructor(){}

    async Execute(req,res){
        if(req.params.id == undefined){
            return res.status(401)
        }
        else{
            return await new DeleteTodoBusinessService().Execute(req.params.id);
        }
    }
}

export default DeleteTodoCommandGateway 