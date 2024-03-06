const express = require("express");
const { getAllCharacters } = require("../controllers/getAllCharacters");
const { AddNewCharacter } = require("../controllers/PostCharacter");
const { UpdateCharacter } = require("../controllers/UpdateCharacter");
const Router = express.Router();
/**
 * @desc     Get All Characters
 * @route    /api/characters
 * @method   GET
 * @access   public
 */
Router.get("/characters", getAllCharacters);
/**
 * @desc     Create a new character
 * @route    /api/character
 * @method   POST
 * @access   public
 */
Router.post("/character", AddNewCharacter);

/**
 * @desc     Create a new character
 * @route    /api/character
 * @method   POST
 * @access   public
 */
Router.put("/character/:id", UpdateCharacter);
module.exports = Router;
