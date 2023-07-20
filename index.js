const express = require("express");
const app = express();
const DBconnection = require("./config/db");

app.use(express.json());


app.get("/", async (req, res) => {
  res.json({ msg: "welcome Music Mix backend" });
});

app.listen(8080, async () => {
  await DBconnection
  console.log("DB connected");
  console.log("Server is running on port 8080");
});

