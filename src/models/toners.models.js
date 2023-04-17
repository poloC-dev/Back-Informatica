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
    require: [true, "La cantidad es requerida"],
  },
  printer: {
    type: String,
    required: [true, "La impresora es requerida"],
  },
  ubication:{
    type:String,
    required: [true,"Falta ubicacion"],
  }
  created_at: { type: Date, default: new Date() },
});

const TonerModel = model("Toner", TonerSchema);

module.exports = TonerModel;
