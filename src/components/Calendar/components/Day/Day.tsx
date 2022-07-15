import React from "react";
import { DayContainer, Button } from "./Day_Styles";
import { DayProps } from "../../types";
import { format } from "date-fns";

const Day = ({ day, isSelected = false, selectDate }: DayProps) => {
  const date = new Date(day);
  const parsedDayName = format(date, "EEE");
  const parsedDayNumber = format(date, "dd");
  const parsedDayMonth = format(date, "MMM");

  const isCurrent =
    new Date().toLocaleDateString() === date.toLocaleDateString();

  return (
    <DayContainer>
      <Button
        onClick={() => selectDate(date)}
        isCurrent={isCurrent}
        isSelected={isSelected}
      >
        <span className="day__name">{parsedDayName}</span>
        <span className="day__number"> {parsedDayNumber} </span>
        <span className="day__month"> {parsedDayMonth} </span>
      </Button>
    </DayContainer>
  );
};

export default Day;
