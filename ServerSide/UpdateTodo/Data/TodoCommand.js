import {mongoose} from 'mongoose';

class TodoCommand{

    constructor(){}

    async Update(todo){
        var connection = mongoose.createConnection('mongodb://localhost:27017/HomeAssignment');
        var Schema = mongoose.Schema;
        var TODOSchema = new Schema({
            _id: String,
            name: String,
            description: String,
            status: Number
        });
        var TODOModel = connection.model('TODO', TODOSchema, 'TODO');
        let output2 = await TODOModel.findByIdAndUpdate(todo._id,todo);
        return output2._id;
    }
}

export default TodoCommand