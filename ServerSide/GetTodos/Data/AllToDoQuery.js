import mongoose from 'mongoose';

class AllToDoQuery{

    constructor(){}

    async Select(status){
        var connection = mongoose.createConnection('mongodb://localhost:27017/HomeAssignment');
        var Schema = mongoose.Schema;
        var TODOSchema = new Schema({
            _id: String,
            name: String,
            description: String,
            status: Number
        });
        var TODOModel = connection.model('TODO', TODOSchema, 'TODO');
        let output = await TODOModel.find({});
        return output;
    }
}

export default AllToDoQuery