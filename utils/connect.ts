import mongoose from "mongoose";



export default async function connectDB() {

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection to MongoDB failed", error);
  }

}
