const {dbConnection}=require('./database');

async function deleteData(){
    try{
        const db=await dbConnection();
        const collection=db.collection('users');
        const deleteQuery=await collection.deleteMany({name:"John Doe"});
        console.log(`${deleteQuery.deletedCount} Documents deleted successfully`);
    }
    catch(err){
        console.error("Error deleting data:", err);
        throw err; 
    }
}


deleteData();