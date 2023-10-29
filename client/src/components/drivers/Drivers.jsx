import styles from "../drivers/drivers.module.css";
import Driver from "../driver/Driver.jsx";

const Drivers = ({ drivers, onClose }) => {
  return (
    <div className={styles.container}>
      {
        <section>
          <select name="filtrar-team-origen" id="filtro-1">
            <option>Team</option>
            <option>Origen (Api/DB)</option>
            <option>Filtrar por:</option>
          </select>

          <select name="filtrar-orden" id="filtro-2">
            <option>Filtrar por:</option>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>Fecha de Nacimiento</option>
          </select>
          <button>Aplicar Filtros</button>
        </section>
      }

      {drivers.map((driver, index) => (
        <div key={index}>
          {driver.map((drv, i) => {
            return (
              <div key={i}>
                <Driver
                  id={drv?.id}
                  name={drv?.name.forename}
                  surname={drv?.name.surname}
                  image={drv?.image.url}
                  teams={drv?.teams}
                  onClose={() => onClose(drv.id)}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Drivers;
