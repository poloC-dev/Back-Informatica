const MovementModel = require("../../models/movements.models");

const deleteMovementService = async (req, res) => {
  const { _id } = req.params;
  const response = await MovementModel.deleteOne({ _id: _id });
  if (response.deletedCount == 0)
    throw new Error(`No existe el movimiento con id:  ${_id}.`);
  return _id;
};

module.exports = deleteMovementService;
