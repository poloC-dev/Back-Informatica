const MovementModel = require("../../models/movements.models");

const updateMovementService = async (req) => {
  const { _id } = req.params;
  const movement = req.body;

  updatedMovement = await MovementModel.findOne({ _id: _id });
  console.log("service movement: ", updatedMovement);
  updatedMovement.description = movement.description;
  updatedMovement.startDate = movement.startDate;
  updatedMovement.endDate = movement.endDate;
  updatedMovement.toner = movement.toner;
  console.log("service movement: ", updatedMovement);
  await updatedMovement.save();

  return updatedMovement;
};

module.exports = updateMovementService;
