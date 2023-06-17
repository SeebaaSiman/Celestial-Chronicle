import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Home
      <h1>Home</h1>
      <h4>
        aquí se ingresa la edad y al hacer click se guarda en el storage y manda
        a otra pág para que haga todos los cálculos
      </h4>
      <NavLink to="/Age">IR</NavLink>
    </div>
  );
};
