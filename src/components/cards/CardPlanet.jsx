import { CardContainer, Title } from "./cardStyle";
import { CountdownTimer } from "../countdown";
import { useCardPlanet } from "../../hook/useCardPlanet";
import { useCountDownTimer } from "../../hook/useCountDownTimer";
import { useLanguage } from "../../language/LanguageContext";

export const CardPlanet = ({ planet }) => {
  const { onCardFullScreen, imgsrc, toggleshow } = useCardPlanet(planet);

  const {
    age,
    nextBirthday,
    daysOld,
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  } = useCountDownTimer(planet);
  const { texts } = useLanguage();
  return (
    <CardContainer imgsrc={imgsrc}>
      <span>
        <h2>
          {age.years === 0 && age.months > 1
            ? `${age.months} ${texts.cardTxt1} ${age.days} ${texts.cardTxt2} ${planet}`
            : age.years === 0 && age.months === 1
            ? `${age.months} ${texts.cardTxt1variant} ${age.days} ${texts.cardTxt2} ${planet}`
            : `
            ${age.years} ${texts.cardTxt3} ${age.months} ${texts.cardTxt4} ${planet}
            `}
        </h2>
        <h4>
          {texts.cardTxt5} {nextBirthday.toDateString()}{" "}
        </h4>
      </span>

      <span>
        <h4>
          {daysOld}
          {texts.cardTxt6}
          {planet}
        </h4>
        <CountdownTimer
          years={years}
          months={months}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </span>

      <Title
        onFocus={toggleshow}
        onBlur={toggleshow}
        onClick={onCardFullScreen}
      >
        {planet}
      </Title>
    </CardContainer>
  );
};
