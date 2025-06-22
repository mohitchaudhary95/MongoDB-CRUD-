const {dbConnection} = require('./database');

async function insertData(){
    try{
        const db=await dbConnection();
        const collection=db.collection('users');
        const data=[{
            "name":"John Doe",
            "email":"johndoe12@gmail.com",
            "age":30,
        },
        {
            "name":"Jane Smith",
            "email":"janesmith23@gmail.com",
            "age":25,
        }
    ]

    const result=await collection.insertMany(data);
    console.log(`${ result.insertedCount} Documents inserted successfully`);
    }
    catch(err){
        console.error("Error inserting data:", err);
        throw err; 
    }
}

insertData()