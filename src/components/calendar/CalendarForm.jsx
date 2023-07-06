import { styled } from "styled-components";

export const CalendarForm = () => {
  return (
    <Card>
      <form action="">
        <InputBox>
          <input type="button" required="required" />
          <span>Day</span>
        </InputBox>
        <InputBox>
          <input type="button" required="required" />
          <span>Month</span>
        </InputBox>
        <InputBox>
          <input type="button" required="required" />
          <span>Year</span>
        </InputBox>
        <BtnSubmit>Enter</BtnSubmit>
      </form>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 80%;
  /* width: 300px; */
  flex-direction: column;
  gap: 35px;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  border-radius: 8px;
`;
const InputBox = styled.div`
  position: relative;
  width: 250px;
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 1em;
    background: transparent;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
    border-bottom-left-radius: 8px;
    &:valid ~ span,
    &:focus ~ span {
      transform: translateX(113px) translateY(-15px);
      font-size: 0.8em;
      padding: 5px 10px;
      background: #000;
      letter-spacing: 0.2em;
      color: #fff;
      border: 2px;
    }
    &:valid,
    &:focus {
      border: 2px solid #000;
      border-radius: 8px;
    }
  }
  span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    transform: translateY(-4px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
  }
`;
const BtnSubmit = styled.button`
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 1em;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;
