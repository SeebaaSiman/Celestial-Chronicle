import { ExpiredCountdown, ShowCounter } from "./";

export const CountdownTimer = ({
  years,
  months,
  days,
  hours,
  minutes,
  seconds,
}) => {
  // recibe como prop el resultado de result
  // const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredCountdown />;
  } else {
    return (
      <ShowCounter
        years={years}
        months={months}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
