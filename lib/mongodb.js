import mongoose from "mongoose";
let cached = global.mongoose
if(!cached){
    cached=global.mongoose={
        conn:null,
        promise:null,
    }
}
 async function ConnectDB() {
    const MONGO_URI= process.env.MONGO_URI;
    if (!MONGO_URI){
        throw new Error("Mongo Uri is not defined!");
    }
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
         cached.promise=mongoose.connect(MONGO_URI,{bufferCommands:false,})
    }
    cached.conn = await cached.promise;
    return cached.conn
 }
 export default ConnectDB;