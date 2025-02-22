import GetTODOBusinessService from '../BL/GetTODOBusinessService.js';

class GetTodoCommandGateway{

    constructor(){}

    async Execute(req,res){
        if(req.params.id == undefined){
            return res.status(401)
        }
        else{
            return await new GetTODOBusinessService().Execute(req.params.id);
        }
    }
}

export default GetTodoCommandGateway 