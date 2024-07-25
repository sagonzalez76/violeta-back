import Sequelize from "sequelize";

// Configuración de Sequelize usando los detalles proporcionados
export const sequelize = new Sequelize(
  'violeta', // Nombre de la base de datos
  'violetadb', // Nombre de usuario
  'WDmZWNpCVMZvhLcunM1xAFqnSKf8nTap', // Contraseña
  {
    host: 'dpg-cqh9eauehbks73a6q4ug-a.oregon-postgres.render.com', // Host de la base de datos
    port: 5432, // Puerto
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Opcional: Desactivar la verificación del certificado (recomendado para desarrollo)
      }
    },
    logging: false, // Desactivar logging de SQL
    // Configuración opcional para el pool de conexiones
    // pool: {
    //   max: 5, // Máximo de conexiones en el pool
    //   min: 0, // Mínimo de conexiones en el pool
    //   acquire: 30000, // Tiempo máximo para adquirir una conexión
    //   idle: 10000, // Tiempo máximo que una conexión puede estar inactiva
    // },
  }
);