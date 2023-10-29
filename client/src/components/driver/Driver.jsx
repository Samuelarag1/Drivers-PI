import { NavLink } from "react-router-dom";

const Driver = (props) => {
  const { id, image, name, surname, teams, onClose } = props;

  return (
    <div>
      <button onClick={onClose}>X</button>
      <NavLink to={`/detail/:${id}`}>
        <div>
          <h1>{name + " " + surname}</h1>
          <img src={image} alt="img" />
          <p>{teams}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Driver;
