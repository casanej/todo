import styled, { css } from "styled-components";
import { ButtonStyles } from "./index.types";

const isToggled = (toggled: boolean = false) => {
  if (toggled) {
    return css`
      border-color: #4DA6B3;
      color: #4DA6B3;
    `
  }

}

export const Button = styled.button<ButtonStyles>`
  color: inherit;

  background-color: #ffffff;
  border: 1px solid #DBDBDB;
  padding: 12px 16px;
  border-radius: 17px;
  min-width: 64px;
  cursor: pointer;

  ${props => isToggled(props.toggled)}

  transition: border-color 0.2s ease;


  &:hover {
    border-color: #4DA6B3;
    transition: border-color 0.2s ease;
  }
`;