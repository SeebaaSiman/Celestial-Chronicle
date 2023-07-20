import { birthdateTxt } from "../data/text";
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

        {birthdateTxt.map((item, index) => (
          <Content key={index}>
            <p>{item.text}</p>
          </Content>
        ))}
        <Content>
          <CalendarForm />
        </Content>
      </PageContainer>
      <Footer />
    </>
  );
};
