import { Content, PageContainer } from "../style/StylesGlobal";
import { CalendarForm, Footer } from "@/components";
export const Birthdate = () => {
  return (
    <>
      <PageContainer>
        <Content>
          <h2>
            ¿Sabías que tu edad varía en diferentes planetas del sistema solar?
          </h2>
        </Content>
        <Content>
          Esto se debe a que cada planeta tiene una duración de año y una
          velocidad de rotación únicas, lo que afecta la forma en que el tiempo
          se mide en esos lugares.
        </Content>
        <Content>
          Completa el formulario con tu fecha de nacimiento y descubre cuántos
          años tendrías en la Tierra, así como en Marte, Júpiter, Saturno y
          otros fascinantes planetas. ¡Es una forma divertida de explorar cómo
          el tiempo y la edad se perciben en nuestro vasto universo!
        </Content>
        <Content>
          ¡Prepárate para un viaje único a través del tiempo y el espacio!
        </Content>
        <Content>
          <CalendarForm />
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
};
