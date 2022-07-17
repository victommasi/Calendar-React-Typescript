import styled from "styled-components";
import { colors } from "../../../../styles";

export const SlideButton = styled.button`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  transition: background ease-out 0.2s;
  color: ${colors.secondary};

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
