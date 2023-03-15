const getQuantityMiddleware = async (req, res, next) => {
  req.quantity = 0;
  return next();
};

module.exports = getQuantityMiddleware;
