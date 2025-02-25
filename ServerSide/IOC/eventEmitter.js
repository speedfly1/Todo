import EventEmitter from 'events';
const eventEmitter = new EventEmitter(); 

class eventEmitterClass{

    static publishEvent(eventName, data) {
        eventEmitter.emit(eventName,data);
    }

    getConsumer(eventName, func){
        return eventEmitter.on(eventName, () => func());
    }
}


export default eventEmitterClass;