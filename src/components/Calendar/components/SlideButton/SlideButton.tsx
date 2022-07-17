import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideButtonProps } from "../../types";
import { SlideButton as SlideButtonWrapper } from "./SlideButton_Styles";

const SlideButton = ({ onClick, icon }: SlideButtonProps) => {
  return (
    <SlideButtonWrapper type="button" onClick={() => onClick()}>
      <FontAwesomeIcon icon={icon} />
    </SlideButtonWrapper>
  );
};

export default memo(SlideButton);
