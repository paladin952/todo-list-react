import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: Transparent no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const TransparentButton = ({ children, style }) => {
    return <Button style={style}>{children}</Button>;
};
