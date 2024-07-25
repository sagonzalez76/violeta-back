import { Victima } from "../models/Victima.js";

export async function getVictimas(req, res) {
  try {
    const victimas = await Victima.findAll({
      atributes: ["id", "name", "lastname", "id_number", "email"],
    });
    res.json(victimas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createVictima(req, res) {
  const { name, lastname, id_number, email } = req.body;
  try {
    let newVictima = await Victima.create(
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

export async function getProjectTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectId", "name", "done"],
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
