import dotenv from "dotenv";
import app from "./app.js";
import cloudinary from "cloudinary";
import connectDB from "./database/dbConnection.js";

dotenv.config();

// database connect
connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
