import BL from '../BL/GetTODOBusinessService.js';

class GetTodosCommandGateway{

    constructor(){}

    async Execute(req){
        return await new BL().Execute();
    }
}

export default GetTodosCommandGateway 