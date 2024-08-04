import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.Route.js";
import userRoute from "./Route/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
mongoose.connect(URI, {
 
})
  .then(() => console.log("MongoDB Connected..."))
  .catch(error => console.log("MongoDB Error:", error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
