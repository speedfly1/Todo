import {mongoose} from 'mongoose';

class TodoQuery{

    constructor(){}

    async Select(id){
        var connection = mongoose.createConnection('mongodb://localhost:27017/HomeAssignment');
        var Schema = mongoose.Schema;
        var TODOSchema = new Schema({
            _id: String,
            name: String,
            description: String,
            status: Number
        });
        var TODOModel = connection.model('TODO', TODOSchema, 'TODO');
        let output2 = await TODOModel.findById(id);
        return output2;
    }
}

export default TodoQuery