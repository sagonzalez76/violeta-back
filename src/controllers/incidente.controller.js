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
  const { name, lastname, id_number, email } = req.body;
  try {
    let newIncidente = await Victima.create(
      {
        name,
        lastname,
        id_number,
        email
      },
      {
        fields: ["name", "lastname", "id_number", "email"],
      }
    );
    return res.json(newVictima);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
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
