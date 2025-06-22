const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dbName='mydatabase';
const client=new MongoClient(url);

async function Connect(){
    await client.connect();
    console.log("Connected to MongoDB");
    const db=client.db(dbName);
    const collection=db.collection('example');
    const findresult=await collection.find().toArray();
    console.log(findresult)
}

Connect();