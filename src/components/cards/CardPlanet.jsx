import { CardContainer, Title } from "./cardStyle";
import { CountdownTimer } from "../countdown";
import { useCardPlanet } from "../../hook/useCardPlanet";
import { useCountDownTimer } from "../../hook/useCountDownTimer";

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

  return (
    <CardContainer imgsrc={imgsrc}>
      <span>
        <h2>
          {age.years === 0
            ? `${age.months} months and ${age.days} days old on the ${planet}`
            : `
         ${age.years} years ${age.months} months old on the ${planet}
         `}
        </h2>
        <h4>Next Birthday: {nextBirthday.toDateString()} </h4>
      </span>

      <span>
        <h4>
          {daysOld} days until your birthday on the {planet}
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
