import { ExpiredCountdown, ShowCounter } from "./";

export const CountdownTimer = () => {
  const days = "";
  const hours = "";
  const minutes = "";
  const seconds = "";
  // recibe como prop el resultado de result
  // const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredCountdown />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
