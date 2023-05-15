const MovementModel = require("../../models/movements.models");

const addMovementService = async (req, res) => {
  const movement = req.body;
  const newMovement = new MovementModel(movement);
  await newMovement.save();
  console.log("service movimiento entro", newMovement);
  return movement;
};

module.exports = addMovementService;
