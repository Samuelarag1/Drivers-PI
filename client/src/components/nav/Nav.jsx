import SearchBar from "../searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/postUser");
  };

  const getAllDrivers = () => {
    onSearch("");
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={handleOnClick}>Crear Driver</button>
      <button onClick={getAllDrivers}>Todos los Drivers</button>
    </div>
  );
};

export default Nav;
