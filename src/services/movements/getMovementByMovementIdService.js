const MovementModel = require("../../models/movements.models");

const getMovementByMovementIdService = async (req, res) => {
  const { _id } = req.params;
  const response = await MovementModel.findOne({ _id: _id });
  if (!response) throw new Error(`No existe el toner ${model}.`);
  return response;
};

module.exports = getMovementByMovementIdService;
