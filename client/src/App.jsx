import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Bienvenida from "./components/bienvenida/Bienvenida.jsx";
import Nav from "./components/nav/Nav.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const access = (acceso) => {
    if (acceso) {
      navigate("/home");
    }
  };

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      {location.pathname === "/" && <Bienvenida access={access} />}
    </div>
  );
}

export default App;
