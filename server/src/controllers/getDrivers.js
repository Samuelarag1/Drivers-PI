const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../..", "api", "db.json");
const capitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const getDrivers = (req, res) => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    const jsonData = JSON.parse(data);

    if (req.query.name) {
      const conductor = capitalize(req.query.name);

      const driversFiltered = jsonData.drivers.filter((driver) => {
        return (
          (driver.name?.forename.includes(conductor) ||
            driver.name?.surname.includes(conductor)) &&
          driver
        );
      });
      if (driversFiltered.length) {
        if (driversFiltered.length > 15) {
          return res.status(200).send(driversFiltered(0, 15));
        }
        return res.status(200).send(driversFiltered);
      } else {
        return res
          .status(404)
          .send("No existen conductores con los argumentos ingresados");
      }
    }

    return res.status(200).json(jsonData);
  } catch (error) {
    res.status(200).send(`Hubo un error ${error}`);
  }
};

module.exports = { getDrivers };
