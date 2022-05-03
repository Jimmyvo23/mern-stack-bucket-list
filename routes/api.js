import express from "express";
const router = express.Router();
import bucketList from "../models/bucketList";

// router.get("/", (req, res) => {
//   res.send("App is working");
// });

router.get("/", (req, res) => {
  bucketList
    .find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", daerrorta);
    });

  router.post("/saved", (req, res) => {
    console.log("Body: ", req.body);
    res.json("We received your data!!!");
  });

  router.get("/name", (req, res) => {
    const data = {
      username: "Coco",
      age: 2,
    };
    res.json(data);
  });
});

export default router;
