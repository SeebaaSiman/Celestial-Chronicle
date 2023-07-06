import { NavLink } from "react-router-dom";
import { ButtonStyle, Content } from "../style/StylesGlobal";
import { Calendar } from "../components/calendar/Calendar";
import { CalendarForm } from "../components/calendar/CalendarForm";

export const Home = () => {
  return (
    <div>
      Home
      <h1>Home</h1>
      <Content>
        {" "}
        aquí se ingresa la edad y al hacer click se guarda en el storage y manda
        a otra pág para que haga todos los cálculos
      </Content>
      <Content>
        <CalendarForm />
      </Content>
      <NavLink to="/Age">
        <ButtonStyle>IR</ButtonStyle>
      </NavLink>
    </div>
  );
};
