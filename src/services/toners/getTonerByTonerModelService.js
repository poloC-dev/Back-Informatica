const TonerModel = require("../../models/toners.models");

const getTonerByTonerModelService = async (req, res) => {
  const { model } = req.params;
  const response = await TonerModel.findOne({ model: model });
  if (!response) throw new Error(`No existe el toner ${model}.`);
  return response;
};

module.exports = getTonerByTonerModelService;
