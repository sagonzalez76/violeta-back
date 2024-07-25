import { Victimario } from "../models/Victimarios.js";

export async function getVictimarios(req, res) {
  try {
    const victimarios = await Victimario.findAll({
      atributes: ["id", "name", "lastname", "id_number", "email"],
    });
    res.json(victimarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createVictimario(req, res) {
  const { name, lastname, id_number, email } = req.body;
  try {
    let newVictimario = await Victimario.create(
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
    return res.json(newVictimario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}