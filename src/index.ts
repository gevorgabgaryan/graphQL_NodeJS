import MongooseService from "./db/connectMongoose";
import API from "./app/App";

(async ()=>{
    await MongooseService.init();
    await API.init()
})()