const app = require("./server/server");
require("./database/db");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
