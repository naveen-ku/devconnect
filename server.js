const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB COnnected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world !!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  return console.log(`Server runnig on port ${port}`);
});
