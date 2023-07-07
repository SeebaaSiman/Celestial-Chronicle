import { BtnSubmit, Card, InputBox, Li, Ul } from "./CalendarStyle";
import { useCalendarForm } from "./useCalendarForm";

export const CalendarForm = () => {
  const {
    arr,
    arrOptionsDay,
    arrOptionsMonth,
    arrOptionsYear,
    handleInputChange,
    onSubmit,
  } = useCalendarForm();

  return (
    <Card>
      <form onSubmit={onSubmit}>
        {arr.map((s, index) => {
          let arrOptions;
          if (s.textSpan === "day") {
            arrOptions = arrOptionsDay;
          } else if (s.textSpan === "month") {
            arrOptions = arrOptionsMonth;
          } else if (s.textSpan === "year") {
            arrOptions = arrOptionsYear;
          }

          return (
            <InputBox key={index}>
              <input
                type="button"
                required="required"
                readOnly
                onFocus={s.fnOnFocus}
                onChange={handleInputChange}
                value={s.fnValue}
              />
              {s.stateOptions && (
                <Ul>
                  {arrOptions.map((a, index) => (
                    <Li
                      key={index}
                      onClick={() => a.fnOnclick(a.text, a.inputName)}
                    >
                      {a.text}
                    </Li>
                  ))}
                </Ul>
              )}
              <span>{s.textSpan}</span>
            </InputBox>
          );
        })}
        <BtnSubmit type="submit">Enter</BtnSubmit>
      </form>
    </Card>
  );
};
// en BtnSubmit hacer un condicional, si no esta loading está el botón si es loading dentro de enter aparece un spiner bien simple. La idea es darle 2 segundos a que guarde en LocalStorage y luego me dirija a otra página
