import "@testing-library/jest-dom";
import Calendar from "../Calendar";
import { render, fireEvent } from "@testing-library/react";
import { colors } from "../../../styles";

let date = "2022-07-13";

describe("<Calendar />", () => {
  it("Should show custom date", () => {
    const comp = render(<Calendar date={date} />);
    expect(comp.getByText("Wed")).toBeInTheDocument();
    expect(comp.getByText("13")).toBeInTheDocument();
  });

  it("Should show selected date", () => {
    const comp = render(<Calendar date={date} />);
    const firstDay = comp.getAllByTestId("day-button")[0];
    fireEvent.click(firstDay);
    expect(firstDay).toHaveStyle(`background-color: ${colors.primary}`);
  });
});
