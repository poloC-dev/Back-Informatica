const TonerModel = require("../../models/toners.models");

const updateTonerService = async (req) => {
  const { _id } = req.params;
  const toner = req.body;
  const updateToner = await TonerModel.findOne({ _id: _id });
  updateToner.brand = toner.brand;
  updateToner.model = toner.model;
  updateToner.quantity = toner.quantity;
  updateToner.printer = toner.printer;
  await updateToner.save();
  return updateToner.model;
};

module.exports = updateTonerService;
