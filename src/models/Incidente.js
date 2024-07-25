import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Victimario } from "./Victimarios.js";
import { Victima } from "./Victima.js";

export const Incidente = sequelize.define(
  "incidentes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    incidentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["fisica", "psicologica", "sexual", "economica"],
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aggressor: {
      type: DataTypes.STRING,
    },
    relationship: {
      type: DataTypes.ENUM,
      values: ["pareja", "expareja", "familiar", "conocido", "desconocido"],
    },
    previousReports: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    medicalHelp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    legalHelp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    consent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contactPreference: {
      type: DataTypes.ENUM,
      values: ["telefono", "correo"],
    },
  },
  {
    timestamps: false,
  }
);



// Relación 1 a 1 entre Victima e Incidente
Victima.hasOne(Incidente);
Incidente.belongsTo(Victima);

// Relación 1 a 1 entre Victimario e Incidente
Victimario.hasOne(Incidente);
Incidente.belongsTo(Victimario);