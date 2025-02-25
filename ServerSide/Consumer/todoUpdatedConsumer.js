import eventEmitterClass from '../IOC/eventEmitter.js'
import Cache from '../Cache/CacheService.js'

const eventEmitter = new eventEmitterClass();

const delectfromCache =function invalidateCache(){
    Cache.delCache("Todos");
}

class todoUpdatedConsumer{

    constructor(){}

    static consume(){
        eventEmitter.getConsumer("todoUpdated",delectfromCache);
    }

    static consumeWithFunc(func){
        eventEmitter.getConsumer("todoUpdated",func);
    }
}


export default  todoUpdatedConsumer 