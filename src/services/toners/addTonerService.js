const TonerModel = require("../../models/movements.models");
const addTonerMovement = require("../../utils/addTonerMovement");

const addTonerService = async (req, res) => {
  const toner = req.body;
  toner.quantity = req.quantity;
  const newToner = new TonerModel(toner);
  await newToner.save();
  await addTonerMovement(toner);
  return toner;
};

module.exports = addTonerService;
