import mongoose from "mongoose";
// const mongoose = require("mongoose");

const connectDb = async (dbName:string) => {
  try {
    // Check if there's an existing connection and disconnect if there is
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    // Set options if needed
    const options = {
      // serverSelectionTimeoutMS: 30000,
      // connectTimeoutMS: 30000,
      // socketTimeoutMS: 45000,
    };

    // Connect to MongoDB with the specified database name
    const uri = `mongodb://localhost:27017/${dbName}`;
    await mongoose.connect(uri, options);

    console.log(`Connected to MongoDB database: ${dbName}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB database ${dbName}:`, error);
  }
};

export default connectDb;
// module.exports = connectDb;
