import MongooseService from "./db/connectMongoose";


(async ()=>{
    await MongooseService.init()
})()