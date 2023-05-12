const addTonerService = require("../services/toners/addTonerService");
const deleteTonerService = require("../services/toners/deleteTonerService");
const getTonerByTonerModelService = require("../services/toners/getTonerByTonerModelService");
const getTonerService = require("../services/toners/getTonerService");
const updateTonerService = require("../services/toners/updateTonerService");

const addTonerController = async (req, res) => {
  try {
    const addToner = await addTonerService(req);
    res.status(201).json({
      message: `Se ha creado el toner ${addToner.brand} ${addToner.model}`,
    });
  } catch (error) {
    res.json({ message: "Ya existe ese toner" });
  }
};

const deleteTonerController = async (req, res) => {
  try {
    const delToner = await deleteTonerService(req);
    res.json({ message: `Toner ${delToner} eliminado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: "No existe ese modelo toner" });
  }
};

const getTonerByTonerModelController = async (req, res) => {
  try {
    const toner = await getTonerByTonerModelService(req);
    res.json(toner);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getTonerController = async (req, res) => {
  try {
    const toners = await getTonerService();
    res.json(toners);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateTonerController = async (req, res) => {
  try {
    const updatedToner = await updateTonerService(req);
    res.json({ message: `Toner ${updatedToner} modificado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: "No existe ese toner" });
  }
};

module.exports = {
  updateTonerController,
  getTonerController,
  getTonerByTonerModelController,
  deleteTonerController,
  addTonerController,
};
