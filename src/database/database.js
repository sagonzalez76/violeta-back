import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  'violeta', // nombre de la base de datos
  'violetadb', // nombre de usuario
  'WDmZWNpCVMZvhLcunM1xAFqnSKf8nTap', // contraseña
  {
    host: 'postgresql://violetadb:WDmZWNpCVMZvhLcunM1xAFqnSKf8nTap@dpg-cqh9eauehbks73a6q4ug-a/violeta', // host del servidor de la base de datos
    port: 5432, // puerto para PostgreSQL
    dialect: 'postgres',
    logging: false, // desactiva el logging de Sequelize
  }
);