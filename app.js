const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 3000;
require("./src/config/db");
const ogrenciRouter = require("./src/routes/routes");

app.use(express.json());

app.use("/", ogrenciRouter);

app.get("/", (req, res) => {
  res.send("Merhaba");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
