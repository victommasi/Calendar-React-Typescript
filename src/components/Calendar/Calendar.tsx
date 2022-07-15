import React, { useEffect, useState } from "react";
import { CalendarContainer } from "./Calendar_Styles";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { add, sub, getYear } from "date-fns";
import { CalendarProps } from "./types";
import Day from "./components/Day";
import { createWeekDaysArray } from "./utils";
import SlideButton from "./components/SlideButton";

const Calendar = ({ customDate }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [weekDays, setWeekDays] = useState<Date[]>([]);
  const [currentDay, setCurrentDay] = useState<Date>(
    customDate ? new Date(customDate) : new Date()
  );

  useEffect(() => {
    const weekDaysArr: Date[] = createWeekDaysArray(new Date());
    setWeekDays(weekDaysArr);
  }, []);

  useEffect(() => {
    const weekDaysArr: Date[] = createWeekDaysArray(currentDay);
    setWeekDays(weekDaysArr);
  }, [currentDay]);

  const handlePrevWeek = (): void => {
    setCurrentDay(sub(currentDay, { weeks: 1 }));
  };

  const handleNextWeek = (): void => {
    setCurrentDay(add(currentDay, { weeks: 1 }));
  };

  const handleSelectDate = (date: Date): void => {
    setSelectedDate(date);
  };

  const checkIsSelectedDate = (date: Date): boolean => {
    return date.toLocaleDateString() === selectedDate?.toLocaleDateString();
  };

  return (
    <CalendarContainer>
      <div className="calendar__row">
        <p className="calendar__year">{getYear(currentDay)}</p>
      </div>
      <div className="calendar__row">
        <SlideButton onClick={handlePrevWeek} icon={faAngleLeft} />
        <ul className="calendar__week">
          {weekDays.map((day: Date) => (
            <Day
              key={day.getDate()}
              day={day}
              isSelected={checkIsSelectedDate(day)}
              selectDate={handleSelectDate}
            />
          ))}
        </ul>
        <SlideButton onClick={handleNextWeek} icon={faAngleRight} />
      </div>
    </CalendarContainer>
  );
};

export default Calendar;
