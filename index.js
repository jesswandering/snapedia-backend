import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";



// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());


// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`))

        // ADD THIS DATA ONE TIME
        // User.insertMany(users);
        // Post.insertMany(posts);
    }).catch((error) => console.log(`${error} did not connect`));


