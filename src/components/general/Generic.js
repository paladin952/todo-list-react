import React from "react";
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
`;

export const VerticalContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const HorizontalContainer = styled(FlexContainer)`
  flex-direction: row;
`;

export const HorizontalMargin = styled.div`
  width: 16px; // default
`;

export const VerticalMargin = styled.div`
  height: 16px; // default
`;