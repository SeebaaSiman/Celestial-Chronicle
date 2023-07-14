import { styled } from "styled-components";
import { Content, PageContainer } from "../style/StylesGlobal";
import { CalendarForm, Footer } from "@/components";
const BirthdateContainer = styled(PageContainer)``;
export const Birthdate = () => {
  return (
    <>
      <BirthdateContainer>
        <h1>Birthdate</h1>
        <Content>
          aquí se ingresa la edad y al hacer click se guarda en el storage y
          manda a otra pág para que haga todos los cálculos. Explicar bien los
          cálculos
        </Content>
        <Content>
          <CalendarForm />
        </Content>
      </BirthdateContainer>
      <Footer />
    </>
  );
};
