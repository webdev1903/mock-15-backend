const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

const app = express();

const questionController = require("./controllers/questions.controller");

app.use(cors());
app.use(express.json());

app.use("/questions", questionController);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
