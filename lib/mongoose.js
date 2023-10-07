import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status
const mongoUrl = process.env.MONGODB_URL;
export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  console.log(mongoUrl);
  if (!mongoUrl) {
    return console.log("Missing MongoDB URL");
  }

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(mongoUrl);

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
