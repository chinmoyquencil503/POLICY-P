const mongoose = require("mongoose");

// const mongodb = require("mongodb").MongoClient;

require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/quencil", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", (error) => {
    console.log("error ", error);
  });
mongoose.set("strictQuery", true);
