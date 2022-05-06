import express from "express";
const app = express();
<<<<<<< HEAD
const router = express.Router();
=======
>>>>>>> 97087326e83d574b7ed017a1c12374b63039eb14
import bucketList from "../models/bucketList";

// router.get("/", (req, res) => {
//   res.send("App is working");
// });

<<<<<<< HEAD
// Route
router.get("/", (req, res) => {
=======
app.get("/", (req, res) => {
>>>>>>> 97087326e83d574b7ed017a1c12374b63039eb14
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
<<<<<<< HEAD

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
=======


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
>>>>>>> 97087326e83d574b7ed017a1c12374b63039eb14
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
