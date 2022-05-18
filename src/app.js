const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./common/db");
const userRouter = require("./router/user");

const app = express();
const Port = process.env.PORT || 3333;

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);

app.listen(Port, () => {
  console.log(`Server runing on prot ${Port}`);
});
