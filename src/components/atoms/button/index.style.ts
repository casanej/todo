import styled, { css } from "styled-components";
import { ButtonStyles } from "./index.types";

const handleButtonIcon = (isIcon: boolean = false) => {
  console.log('isIcon', isIcon)
  if (isIcon) {
    return css`
      padding: 14px 12px;
      width: 44px;
    `
  }

  return css`
    min-width: 64px;
  `
}

const handleSize = (size: ButtonStyles['size']) => {
  if (size === 'large') {
    return css`
      padding: 14px 12px;
      font-size: 1.25rem;
    `
  }

  return css`
    padding: 8px 16px;
    font-size: 1.16rem;
  `
}

const handleToggle = (toggled: boolean = false) => {
  if (toggled) {
    return css`
      border-color: #4DA6B3;
      color: #4DA6B3;
    `
  }
}

const handleVariant = (variant: ButtonStyles['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: #ffffff;
        color: inherit;
      `
    case 'info':
      return css`
        background-color: #4DA6B3;
        color: #ffffff;
      `
    case 'success':
      return css`
        background-color: #5DE290;
        color: #ffffff;
      `
    case 'danger':
      return css`
        background-color: #E34F4F;
        color: #ffffff;
      `
  }
}

export const Button = styled.button<ButtonStyles>`
  color: inherit;
  background-color: #ffffff;
  border: 1px solid #DBDBDB;
  border-radius: 17px;
  cursor: pointer;

  ${props => handleButtonIcon(props.isIcon)}
  ${props => handleSize(props.size)}
  ${props => handleToggle(props.toggled)}
  ${props => handleVariant(props.variant)}

  transition: border-color 0.2s ease;

  &:hover {
    border-color: #4DA6B3;
    transition: border-color 0.2s ease;
  }
`;