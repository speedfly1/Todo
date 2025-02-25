import mongoose from 'mongoose';
import { mongoURI } from '../config.js'; // Import the mongoURI from config

class MongoSingleton{
    mongoClient 
    modelClient

    static isInitialized() {
        return this.mongoClient !== undefined && this.modelClient !== undefined;
    }


    static getClient() {
        if (this.isInitialized()) return this.modelClient;

        this.mongoClient = mongoose.createConnection(mongoURI);
        var Schema = mongoose.Schema;
        var TODOSchema = new Schema({
            _id: String,
            name: String,
            description: String,
            status: Number
        });
        this.modelClient = this.mongoClient.model('TODO', TODOSchema, 'TODO');
        return this.modelClient;
    }
}


export default MongoSingleton;