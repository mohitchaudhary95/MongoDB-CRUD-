const express=require('express');
const { dbConnection } = require('./database');
const app=express();


app.get('/',async (req,res)=>{
    const db= await dbConnection();
    const collection = db.collection('example');
    const result = await collection.find().toArray();
    res.json(result);
})

app.use(express.json());

app.post('/users',async (req,res)=>{
    console.log(req.body);
    const db=await dbConnection();
    const collection=db.collection('example');
    const newUser= await collection.insertOne(req.body);
    res.status(201).json("updated successfully");
})

app.put('/users/:name',async (req,res)=>{
    console.log(req.params);
    const db=await dbConnection();
    const collection=db.collection('example');
    const userName=req.params.name;
    const updatedUser=await collection.updateOne({ name: userName }, 
        { $set: req.body });
    res.send("User updated successfully");
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
    dbConnection()
        .then(db => {
            console.log("Database connection established");
        })
        .catch(err => {
            console.error("Failed to connect to the database:", err);
        });
})