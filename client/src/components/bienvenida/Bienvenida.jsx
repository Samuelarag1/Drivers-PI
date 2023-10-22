const Bienvenida = ({ access }) => {
  const handleOnClick = () => {
    access("validate");
  };

  return (
    <div>
      <h1>¡Bienvenidos al sitio mas grande de F1!</h1>
      <button onClick={handleOnClick}>INGRESAR</button>
    </div>
  );
};

export default Bienvenida;
