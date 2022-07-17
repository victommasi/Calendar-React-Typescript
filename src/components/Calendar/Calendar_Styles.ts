import styled from "styled-components";
import { colors, fontSize } from "../../styles";

export const CalendarContainer = styled.div`
  margin: 15px;
  padding: 5px 15px;
  width: 500px;
  height: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px 0px rgb(0, 0, 0, 20%);
  display: flex;
  align-items: center;
  flex-direction: column;

  .calendar__row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:first-child {
      margin-bottom: 5px;
    }

    &:last-child {
      border-top: 1px solid ${colors.lightgray};
    }
  }

  .calendar__week {
    display: flex;
  }

  .calendar__year {
    font-size: ${fontSize.sm};
    font-weight: 400;
    color: ${colors.primary};
    text-align: right;
  }
`;
