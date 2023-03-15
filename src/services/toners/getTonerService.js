const TonerModel = require("../../models/toners.models");

const getTonerService = async () =>{
    return TonerModel.find();
}

module.exports = getTonerService;