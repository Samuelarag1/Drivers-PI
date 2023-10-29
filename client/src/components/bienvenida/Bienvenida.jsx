import styles from "../bienvenida/bienvenida.module.css";
import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>¡Bienvenidos al sitio mas grande de F1!</h1>
      <button className={styles.myButton} onClick={handleOnClick}>
        INGRESAR
      </button>
    </div>
  );
};

export default Bienvenida;
