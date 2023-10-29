const fs = require("fs");
const path = require("path");
const { Driver } = require("../db.js");
const { Op } = require("sequelize");
const filepath = path.join(__dirname, "../..", "api", "db.json");

const capitalize = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const addImage = (driver) => {
  driver.forEach((drv, i) => {
    if (!drv.image.url) {
      drv.image.url =
        "https://st3.depositphotos.com/36221892/37512/i/450/depositphotos_375127320-stock-photo-barcelona-spain-26th-february-2020.jpg";
    }
  });
};

//!MAIN

const getDrivers = async (req, res) => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    const jsonData = JSON.parse(data);

    if (req.query.name) {
      const conductor = capitalize(req.query.name);

      // let driverDB = [];
      // await Driver.findAll({
      //   where: {
      //     nombre: {
      //       [Op.like]: `%${req.query.name}%`,
      //     },
      //   },
      // }).then((data) => driverDB.push(data[0]?.dataValues));

      // let lastDriver = {};
      // if (driverDB) {
      //   driverDB.forEach((driver) => {
      //     const {
      //       nombre,
      //       apellido,
      //       description,
      //       nacionalidad,
      //       fechaDeNacimiento,
      //       imagen,
      //       id,
      //     } = driver;

      //     lastDriver = {
      //       id,
      //       name: {
      //         forename: nombre,
      //         surname: apellido,
      //       },
      //       description: description,
      //       image: {
      //         url: imagen,
      //       },
      //       nationality: nacionalidad,
      //       dob: fechaDeNacimiento,
      //     };
      //   });
      // }
      // console.log(lastDriver);

      const driversFiltered = jsonData.drivers.filter((driver) => {
        return (
          (driver.name?.forename.includes(conductor) ||
            driver.name?.surname.includes(conductor)) &&
          driver
        );
      });
      if (driversFiltered.length > 1) {
        addImage(driversFiltered);

        if (driversFiltered.length > 15) {
          addImage(driversFiltered);
          return res.status(200).json(driversFiltered.slice(0, 15));
        }

        // if (lastDriver.id) {
        //   driversFiltered.push(lastDriver);
        // }

        return res.status(200).json(driversFiltered);
      } else if (driverDB) {
        return res.status(200).json(driverDB);
      } else {
        return res
          .status(404)
          .send("No existen conductores con los argumentos ingresados");
      }
    } else {
      addImage(jsonData.drivers);
      return res.status(200).json(jsonData.drivers);
    }
  } catch (error) {
    res.status(500).send(`Hubo un error ${error}`);
  }
};

module.exports = { getDrivers, addImage };
