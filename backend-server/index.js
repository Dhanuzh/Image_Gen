import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import postRoute from "./routes/postRoute.js";
import dalleRoute from "./routes/dalleRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoute);
app.use("/api/v1/dalle", dalleRoute);

app.get("/", async (req, res) => {
  res.send("Hello from Dall-E");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("Server is running port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
