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
      <p>
        {parseFloat(age.toFixed(2))} years old on the {planet}
      </p>
      <p>Next Birthday: {nextBirthday.toDateString()} </p>
      <p>
        {daysOld} days until your birthday on the {planet}
      </p>
      <CountdownTimer
        years={years}
        months={months}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
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
