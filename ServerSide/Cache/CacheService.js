import NodeCache from 'node-cache';

const ttl = 60 * 60 * 1; // cache for 1 Hour
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 }); // TTL of 100 seconds

class Cache{
    mongoClient 
    modelClient

    static setCache(key,data) {
        return cache.set(key, data);
    }


    static getCache(key) {
        return cache.get(key);
    }

    static delCache(key){
        return cache.del(key);
    }
}


export default Cache;