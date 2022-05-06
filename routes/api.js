import express from "express";
const app = express();
const router = express.Router();
import bucketList from "../models/bucketList";

// router.get("/", (req, res) => {
//   res.send("App is working");
// });

// Route
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
});

router.post("/saved", (req, res) => {
  const data = req.body;
  console.log(res.body)
  const newBucketList = new bucketList(data);

  newBucketList.save((error) => {
    if (!error) {
      return res.json({
        msg: "Your data has been saved!!!",
      });
    } else {
      res.status(500).json({ msg: "Sorry, interal server error" });
    }
  });
});

router.delete("/:id", (req, res)=> {
  const id = req.params.id;
  bucketList.deleteOne({id : id}, (err) => {
if (!err){
  res.send("Successfully deleted!!!")
} else {
  res.send(err)
}
  })
})



router.get("/name", (req, res) => {
  const data = {
    username: "Coco",
    age: 2,
  };
  res.json(data);
});

export default router;
