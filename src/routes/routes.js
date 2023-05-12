const express = require("express");
const {
  addTonerController,
  deleteTonerController,
  getTonerByTonerModelController,
  getTonerController,
  updateTonerController,
} = require("../controller/tonerController");
const validator = require("../utils/validator");
const getQuantityMiddleware = require("../utils/getQuantityMiddleware");
const { body } = require("express-validator");
const { addMovementController } = require("../controller/movementController");
const router = express.Router();

router.get("/toner", getTonerController);
router.get("/toner/:model", getTonerByTonerModelController);
router.put(
  "/toner/:_id",
  body("brand", "Elija una marca valida")
    .exists()
    .isString()
    .isLength({ min: 2, max: 15 }),
  body("model", "Ingrese un modelo valido")
    .exists()
    .isString()
    .isLength({ min: 2, max: 15 }),
  body("quantity", "No puede ser menor a cero")
    .exists()
    .isNumeric()
    .isLength({ min: 0, max: 100 }),
  body("printer", "Debe existir una impresora")
    .exists()
    .isString()
    .isLength({ min: 5, max: 100 }),
  validator,
  updateTonerController
);

router.post(
  "/toner",
  body("brand", "Elija una marca valida")
    .exists()
    .isString()
    .isLength({ min: 2, max: 10 }),
  body("model", "Ingrese un modelo valido")
    .exists()
    .isString()
    .isLength({ min: 2, max: 10 }),
  body("printer", "Debe existir una impresora")
    .exists()
    .isString()
    .isLength({ min: 5, max: 200 }),
  validator,
  getQuantityMiddleware,
  addTonerController
);
router.delete("/toner/:_id", deleteTonerController);

router.post(
  "movement",
  body("description").exists().isString().isLength({ min: 0, max: 300 }),
  validator,
  addMovementController
);
module.exports = router;
