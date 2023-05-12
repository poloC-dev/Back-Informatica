const TonerModel = require("../../models/movements.models");
const addTonerMovement = require("../../utils/addTonerMovement");

const addTonerService = async (req, res) => {
  const toner = req.body;
  toner.quantity = req.quantity;
  const newToner = new TonerModel(toner);
  await newToner.save();
  console.log('nuevo toner service',newToner);
  await addTonerMovement(newToner);
  return toner;
};

module.exports = addTonerService;
