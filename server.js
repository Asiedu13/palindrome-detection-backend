const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
const uri = process.env.db_URI;

const db = mongoose.connection;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("Connected to database successfully"));


app.get("/", (req, res) => {
  res.send("I am working perfectly");
});
const historic = require("./routes/words");
const users = require("./routes/users");
app.use("/history", historic);
app.use("/api/users", users);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
