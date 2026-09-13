//Importamos el framework Express
const express = require('express');
//Creamos la aplicación
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
