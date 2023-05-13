const MovementsModel = require("../models/movements.models");
const formatDate = require("../utils/formatDate");

const addTonerMovement = async (toner) => {
  let newDescrip = "";
  console.log("quantity toner addmovement", toner.quantity);
  if (toner.quantity === 0) {
    newDescrip = `Ingreso nuevo toner ${toner.brand}, modelo ${toner.model}.`;
  }
  if (toner.quantity > 0) {
    newDescrip = `Ingreso/egreso toner ${toner.brand}, modelo ${toner.model}.`;
  }

  FechaInicio = formatDate();

  const Movements = new MovementsModel({
    toner: toner._id, // ID del toner
    description: newDescrip, // Descripcion de movimiento
    startDate: FechaInicio, // Fecha de inicio
    endDate: FechaInicio,
  });
  
  await Movements.save(); // Guardar el movimiento en la colección de Movimientos
};

module.exports = addTonerMovement;
