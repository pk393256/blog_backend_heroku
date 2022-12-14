const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const DBUri = process.env.DBUri;
// console.log("DBUri",DBUri)
// const DBUri="mongodb://localhost:27017/Blog";
async function connectDatabase(){
    // const dbUri="mongodb://localhost:27017/Blog";
    try{
        await mongoose.connect(DBUri);
        console.log('Connection to database successful');
    }catch(err){
        console.log('Error connecting database');
        throw err;
    }
}

module.exports = connectDatabase;
