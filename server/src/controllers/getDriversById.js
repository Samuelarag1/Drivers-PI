const fs = require("fs");
const path = require("path");
const { addImage } = require("./getDrivers");
const filepath = path.join(__dirname, "../..", "api", "db.json");

const getDriversById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = fs.readFileSync(filepath, "utf-8");
    const jsonData = JSON.parse(data);

    const driver = jsonData.drivers.filter((driver) => {
      return Number(driver.id) === id;
    });

    if (driver) {
      addImage(driver);
      return res.status(200).json(driver);
    }
  } catch (error) {
    res.status(500).send(`Ocurrió un error: ${error}`);
  }
};

module.exports = { getDriversById };
