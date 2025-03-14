// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/carouselDB", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully.");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

//Updated spaces updated in 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://gbvp910:${password}@xmretail.aowih.mongodb.net/AWS-Mern-App?retryWrites=true&w=majority&appName=xmretail`, {
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

