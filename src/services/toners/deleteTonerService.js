const TonerModel = require("../../models/toners.models");

const deleteTonerService = async (req, res) => {
  const { model, brand, _id } = req.params;
  const response = await TonerModel.deleteOne({ _id: _id });
  if (response.deletedCount == 0)
    throw new Error(`No existe el toner ${brand} ${model}.`);
  return model;
};

module.exports = deleteTonerService;
