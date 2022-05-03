import mongoose from "mongoose";

const { Schema } = mongoose;

const bucketListDB = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const bucketList = mongoose.model("bucketList", bucketListDB);

export default bucketList;
