import {mongoose} from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

class TodoCommand{

    constructor(){}

    async Save(todo){
        var connection = mongoose.createConnection('mongodb://localhost:27017/HomeAssignment');
        todo._id = uuidv4();
        var Schema = mongoose.Schema;
        var TODOSchema = new Schema({
            _id: String,
            name: String,
            description: String,
            status: Number
        });
        var TODOModel = connection.model('TODO', TODOSchema, 'TODO');
        let output2 = await TODOModel.create(todo);
        return output2._id;
    }
}

export default TodoCommand