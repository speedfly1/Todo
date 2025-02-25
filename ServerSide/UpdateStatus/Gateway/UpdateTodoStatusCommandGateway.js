import UpdateTodoSatusBuisnessService from '../BL/UpdateTodoStatusBuisnessService.js'
class UpdateTodoStatusCommandGateway{

    constructor(){}

    async Execute(req,res){
        var response = await new UpdateTodoSatusBuisnessService().Execute({
            id: req.body.id,
            status: req.body.status
        });
        return true;
    }
}

export default UpdateTodoStatusCommandGateway 