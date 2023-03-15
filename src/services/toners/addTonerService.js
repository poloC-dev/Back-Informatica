const TonerModel = require("../../models/toners.models");

const addTonerService = async (req, res) => {
  const toner = req.body;
  toner.quantity = req.quantity;
  const newToner = new TonerModel(toner);
  await newToner.save();
  return toner;
};

module.exports = addTonerService;
