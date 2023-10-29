import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Details = ({ goHome, drivers }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = Number(location.pathname.split(":")[1]);

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    const foundDriver = drivers
      .flatMap((driver) => driver)
      .find((drv) => drv.id === id);
    if (foundDriver) {
      setDriver([foundDriver]);
    }
  }, [id]);

  return (
    <div>
      <button onClick={goHome}>Back</button>
      {driver.map((drv) => (
        <div key={drv.id}>
          <p>ID: {drv.id}</p>
          <img src={drv.image?.url} alt="img" />
          <p>Nombre Completo: {drv.name.forename + " " + drv.name.surname}</p>
          <p>Nacionalidad: {drv.nationality}</p>
          <p>{drv.description}</p>
          <p>Nacimiento: {drv.dob}</p>
          <p>{drv.teams}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
