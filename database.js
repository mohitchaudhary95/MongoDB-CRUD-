const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dbName='mydatabase';
const client=new MongoClient(url);

const dbConnection=async()=>{
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        const db=client.db(dbName);
        return db;
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        throw err; 
    }
}

module.exports={dbConnection};
