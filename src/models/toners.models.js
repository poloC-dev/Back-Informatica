const { model, Schema } = require("mongoose");

const TonerSchema = new Schema({
  brand: {
    type: String,
    required: [true, "La marca del toner es requerida"],
  },
  model: {
    type: String,
    required: [true, "El modelo del toner es requerido"],
    unique: true,
  },
  quantity: {
    type: Number,
  },
  printer: {
    type: String,
  },
  ubication: {
    type: String,
  },
  created_at: { type: Date, default: Date() },
});

const TonerModel = model("Toner", TonerSchema);

module.exports = TonerModel;
