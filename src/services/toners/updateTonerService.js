const TonerModel = require("../../models/toners.models");
const addTonerMovement = require("../../utils/addTonerMovement");

const updateTonerService = async (req) => {
  const { _id } = req.params;
  const toner = req.body;
  const updateToner = await TonerModel.findOne({ _id: _id });
  updateToner.brand = toner.brand;
  updateToner.model = toner.model;
  updateToner.quantity = toner.quantity;
  updateToner.printer = toner.printer;
  updateToner.ubication = toner.ubication;
  await updateToner.save();

  await addTonerMovement(updateToner);
  return updateToner.model;
};

module.exports = updateTonerService;
