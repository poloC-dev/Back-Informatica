const MovementsModel = require("../models/movements.models");

const addTonerMovement = async (toner) => {
  let newDescrip = "";
  console.log("quantity toner util", toner.quantity);
  if (toner.quantity === 0) {
    newDescrip = `Ingreso nuevo toner ${toner.brand}, modelo ${toner.model}.`;
  }
  if (toner.quantity > 0) {
    newDescrip = `Ingreso/egreso nuevo toner ${toner.brand}, modelo ${toner.model}.`;
  }
  const Movements = new MovementsModel({
    toner: toner._id, // ID del toner
    description: newDescrip, // Descripcion de movimiento
    startDate: new Date(), // Fecha de inicio
  });
  console.log(toner);
  console.log(Movements);
  await Movements.save(); // Guardar el movimiento en la colección de Movimientos
};

module.exports = addTonerMovement;
