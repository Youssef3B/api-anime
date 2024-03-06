const Character = require("../models/Character");

const UpdateCharacter = async (req, res) => {
  const Chara = await Character.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        anime: req.body.anime,
      },
    },
    { new: true }
  );
  res.json(Chara);
};

module.exports = { UpdateCharacter };
