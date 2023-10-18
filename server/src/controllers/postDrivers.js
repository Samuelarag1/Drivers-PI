const { Driver } = require("../db.js");

const postDrivers = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaDeNacimiento,
    } = req.body;

    const newDriver = await Driver.create({
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaDeNacimiento,
    });
    res.status(200).json(newDriver);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postDrivers };
