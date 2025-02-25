import MongoSingleton from '../../IOC/db.js'

class AllToDoQuery{

    constructor(){}

    async Select(){
        let output = await MongoSingleton.getClient().find({});
        return output;
    }
}

export default AllToDoQuery