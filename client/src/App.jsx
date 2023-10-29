import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Bienvenida from "./components/bienvenida/Bienvenida.jsx";
import Drivers from "./components/drivers/Drivers.jsx";
import Details from "./components/details/Details.jsx";
import Nav from "./components/nav/Nav.jsx";
import Form from "./components/form/Form.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);

  const onSearch = async (name) => {
    if (isNaN(Number(name)) || name === "") {
      try {
        const { data } = await axios(
          `http://localhost:3001/drivers/?name=${name}`
        );
        setDrivers((oldDrivers) => [...oldDrivers, data]);
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const { data } = await axios(
          `http://localhost:3001/drivers/${Number(name)}`
        );
        setDrivers((oldDrivers) => [...oldDrivers, data]);
      } catch (error) {
        throw error;
      }
    }
  };

  useEffect(() => {
    navigate("/");
  }, []);

  const onClose = (id) => {
    setDrivers(
      drivers?.map((driver) => {
        return driver.filter((drv) => drv.id !== id);
      })
    );
  };
  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      {location.pathname === "/home" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route
          path="/home"
          element={<Drivers drivers={drivers} onClose={onClose} />}
        />
        <Route
          path="/detail/:id"
          element={<Details goHome={goHome} drivers={drivers} />}
        />
        <Route path="/postUser" element={<Form goHome={goHome} />} />
      </Routes>
    </div>
  );
}

export default App;
