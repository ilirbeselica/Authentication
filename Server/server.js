const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const users = require("./routes/users.js");
const auth = require("./middlewares/auth");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", users);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err.message));

app.get("/test", auth, (req, res) => {
  res.json({ msg: "Access Granted" });
});
