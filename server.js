import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import routes from "./routes/api";

const app = express();

const PORT = process.env.PORT || 8080;

const MONGODB_URI =
  "mongodb+srv://bucketlist:123456789abc@cluster0.ctw54.mongodb.net/bucketListDB?retryWrites=true&w=majority";
mongoose.connect("mongodb://localhost:27017/bucketListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

// Create Schema and model for bucketlistDB

// //back-end express

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server has started on Port " + PORT);
});
