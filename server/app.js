const express = require("express");
const app = express();
const env = require("dotenv/config");
const cors = require("cors");
const session = require("express-session");
//Add route reference
const student = require("./routes/student");
const user = require("./routes/login");
const mongoose = require("mongoose");
//const topics = require("../routes/topic");

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
//Add routes here
app.use("/student", student);
app.use("/user", user);
app.use("/topics", topic);
app.use("/education", education);
app.listen(process.env.PORT, () => {
  console.log("Express server is started at Port Number..." + process.env.PORT);
  console.log(process.env.DBCONNECTION);
  mongoose
    .connect(process.env.DBCONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database is connected...");
    })
    .catch((err) => {
      console.log(err);
    });
});
