const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://topdriverz.com/_next/image?url=https%3A%2F%2Ftopdriverz.nxtstatic.com%2F3488%2Fconversions%2Fescuderias-mas-ganadoras-historia-f1-large.jpg&w=1024&q=75",
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaDeNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
