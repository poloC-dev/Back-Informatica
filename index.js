const app = require("./src/server/server");
require("./src/database/db");
require("dotenv").config();
const cors = require("cors");

app.use(cors({ origin: "*", credentials: true }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});

module.exports = app;
