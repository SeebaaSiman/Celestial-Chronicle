import { useLanguage } from "../language/LanguageContext";
import { Content, PageContainer } from "../style/StylesGlobal";
import { CalendarForm, Footer } from "@/components";
export const Birthdate = () => {
  const { texts } = useLanguage();
  const birthdateTxt = [
    { txt: texts.text6 },
    { txt: texts.text7 },
    { txt: texts.text8 },
  ];
  return (
    <>
      <PageContainer>
        <Content>
          <h2>{texts.title3}</h2>
        </Content>

        {birthdateTxt.map((item, index) => (
          <Content key={index}>
            <p>{item.txt}</p>
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
