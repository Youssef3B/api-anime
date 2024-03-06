const Character = require("../models/Character");

const getAllCharacters = async (req, res) => {
  const data = await Character.find({});
  res.json(data);
};

module.exports = { getAllCharacters };
