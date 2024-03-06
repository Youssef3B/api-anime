const Character = require("../models/Character");
const AddNewCharacter = async (req, res) => {
  const newCharacter = new Character({
    name: req.body.name,
    anime: req.body.anime,
  });
  const result = await newCharacter.save();
  res.json(result);
};

module.exports = { AddNewCharacter };
