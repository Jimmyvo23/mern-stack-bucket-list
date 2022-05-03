import express from "express";
const app = express();
import bucketList from "../models/bucketList";

// router.get("/", (req, res) => {
//   res.send("App is working");
// });

app.get("/", (req, res) => {
  bucketList
    .find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", daerrorta);
    });
});


app.post("/saved", (req, res) => {
  console.log("Body: ", req.body);
  res.json("We received your data!!!");
});

app.get("/name", (req, res) => {
  const data = {
    username: "Coco",
    age: 2,
  };
  res.json(data);
});

export default router;
