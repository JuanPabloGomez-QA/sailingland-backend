// Estructura inicial del backend (Node.js + Express)
// /backend/server.js

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Importar módulos necesarios
const express = require('express'); // Framework para servidor HTTP
const mongoose = require('mongoose'); // Librería para conectar con MongoDB
const cors = require('cors'); // Middleware para habilitar CORS (permite peticiones desde otros dominios)

const app = express();
const PORT = process.env.PORT || 5000; // Puerto del servidor

// Middlewares
app.use(cors()); // Habilita peticiones desde el frontend
app.use(express.json()); // Permite recibir datos en formato JSON en las peticiones

// Ruta base para probar si la API está funcionando
app.get('/', (req, res) => {
  res.send('API de SailingLand funcionando 🚤');
});

// Conexión a MongoDB usando la URL desde .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error de conexión:', err));

// Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
