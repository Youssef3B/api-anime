const express = require("express");
const mongoose = require("mongoose");
const CharacterPath = require("./routes/character");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL);
  console.log("Connected to MongoDb...");
}

app.use(express.json());

app.use("/api/", CharacterPath);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
