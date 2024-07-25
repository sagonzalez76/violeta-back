import { Incidente } from "../models/Incidente.js";

export async function getIncidentes(req, res) {
  try {
    const incidentes = await Incidente.findAll();
    res.json(incidentes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
export async function createIncidente(req, res) {
  const {
    incidentDate,
    location,
    type,
    description,
    relationship,
    previousReports,
    medicalHelp,
    legalHelp,
    consent,
    contactPreference,
    victimaId,
    victimarioId
  } = req.body;

  try {
    // Verifica si la víctima y el victimario existen en la base de datos
    // const victima = await Victima.findByPk(victimaId);
    // const victimario = victimarioId ? await Victimario.findByPk(victimarioId) : null;

    // if (!victima) {
    //   return res.status(400).json({ message: 'Víctima no encontrada' });
    // }

    // if (victimarioId && !victimario) {
    //   return res.status(400).json({ message: 'Victimario no encontrado' });
    // }

    // Crea un nuevo incidente
    const newIncidente = await Incidente.create({
      incidentDate,
      location,
      type,
      description,
      relationship,
      previousReports,
      medicalHelp,
      legalHelp,
      consent,
      contactPreference,
      victimaId,
      victimarioId
    });

    return res.status(201).json(newIncidente);
  } catch (error) {
    console.error('Error al crear el incidente:', error);
    return res.status(500).json({
      message: error.message
    });
  }
}
export async function getVictima(req, res) {
  const { id } = req.params;
  try {
    const project = await Victima.findOne({
      where: {
        id,
      },
    });

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
