const { dbConnection } = require("./database");

async function updateData() {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const updateQuery = await collection.updateMany(
      { name: "John Doe" },
      { $set: { age: 31 } }
    );
    console.log(`${updateQuery.modifiedCount} Documents updated successfully`);
  } catch (err) {
    console.error("Error updating data:", err);
    throw err;
  }
}

updateData();
