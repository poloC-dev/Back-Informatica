const addMovementService = require("../services/movements/addMovementService");
const deleteMovementService = require("../services/movements/deleteMovementService");
const getMovementByMovementIdService = require("../services/movements/getMovementByMovementIdService");
const getMovementService = require("../services/movements/getMovementService");
const updateMovementService = require("../services/movements/updateMovementService");

const addMovementController = async (req, res) => {
  try {
    const addMovement = await addMovementService(req);
    res.status(201).json({
      message: `Se ha creado el movimiento ${addMovement._id} en la fecha ${addMovement.startDate}`,
    });
  } catch (error) {
    res.json({ message: "Ya existe ese movimiento" });
  }
};

const deleteMovementController = async (req, res) => {
  try {
    const delMovement = await deleteMovementService(req);
    res.json({ message: `Movimiento ${delMovement._id} eliminado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: "No existe ese movimiento" });
  }
};

const getMovementByMovementIdController = async (req, res) => {
  try {
    const movement = await getMovementByMovementIdService(req);
    res.json(movement);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getMovementController = async (req, res) => {
  try {
    const movements = await getMovementService();
    res.json(movements);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateMovementController = async (req, res) => {
  try {
    const updatedMovement = await updateMovementService(req);
    res.json({
      message: `Movimiento ${updatedMovement._id} modificado con exito`,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "No existe ese movimiento" });
  }
};

module.exports = {
  updateMovementController,
  getMovementController,
  getMovementByMovementIdController,
  deleteMovementController,
  addMovementController,
};
