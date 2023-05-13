const { model, Schema } = require("mongoose");

const MovementsSchema = new Schema({
  //ref relaciona la coleccion movimientos con la de los toners, y el type guarda el toner relacionado con su id
  toner: { type: Schema.Types.ObjectId, ref: "Toner" },

  description: String,

  startDate: String, // Fecha de inicio

  endDate: String, // Fecha de finalización

  created_at: { type: Date, default: Date() },
});

const MovementsModel = model("Movements", MovementsSchema);

module.exports = MovementsModel;
