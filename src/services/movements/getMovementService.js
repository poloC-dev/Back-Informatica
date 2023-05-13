const MovementModel = require("../../models/movements.models");

const getMovementService = async () =>{
    return MovementModel.find();
}

module.exports = getMovementService;