import { useState } from "react";
import axios from "axios";
const Form = ({ goHome }) => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    imagen: "",
    nacionalidad: "",
    fechaDeNacimiento: "",
  });

  const handleOnInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const newDriver = async () => {
    try {
      await axios.post(`http://localhost:3001/drivers`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      throw error;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    newDriver();
    setValues({
      nombre: "",
      apellido: "",
      descripcion: "",
      imagen: "",
      nacionalidad: "",
      fechaDeNacimiento: "",
    });
  };
  return (
    <div>
      <button onClick={goHome}>Back</button>
      <form onSubmit={handleOnSubmit}>
        <p>Nombre</p>
        <input
          type="text"
          value={values.nombre}
          name="nombre"
          onChange={handleOnInput}
        />

        <p>Apellido</p>
        <input
          type="text"
          value={values.apellido}
          name="apellido"
          onChange={handleOnInput}
        />

        <p>Nacionalidad</p>
        <input
          type="text"
          value={values.nacionalidad}
          name="nacionalidad"
          onChange={handleOnInput}
        />

        <p>Fecha de nacimiento</p>
        <input
          type="date"
          value={values.fechaDeNacimiento}
          name="fechaDeNacimiento"
          onChange={handleOnInput}
        />

        <p>Imagen</p>
        <input
          type="file"
          value={values.imagen}
          name="imagen"
          onChange={handleOnInput}
        />

        <p>Descripcion</p>
        <input
          type="text"
          value={values.descripcion}
          name="descripcion"
          onChange={handleOnInput}
        />
        {/*
        <p>Teams</p>
        <input type="text" value="team" name="teams" onChange={handleOnInput} />
        <br /> */}
        <button type="submit">Crear Driver</button>
      </form>
    </div>
  );
};

export default Form;
