import styled from "styled-components";
import { ButtonStyles } from "./index.types";

const handlePadding = (size: ButtonStyles['size'], isIcon: boolean = false) => {
  if (isIcon) return;

  if (size === 'large') return '--btn-padding: 14px 12px;'

  return '--btn-padding: 8px 16px;'
}

const handleSize = (size: ButtonStyles['size'], isIcon: boolean = false) => {
  if (isIcon) {
    return '--btn-width: 44px;'
  }
  if (size === 'large') {
    return '--btn-font-size: 1.25em;'
  }

  return `
    --btn-min-width: 64px;
    --btn-font-size: 1em;
  `
}

const handleToggle = (toggled: boolean = false) => {
  if (toggled) {
    return `
      --btn-border-color: #4DA6B3;
      --btn-text-color: #4DA6B3;
    `
  }
}

const handleVariant = (variant: ButtonStyles['variant']) => {
  switch (variant) {
    case 'primary':
      return `
        --btn-bg-color: #ffffff;
        --btn-border-color: #DBDBDB;
        --btn-text-color: inherit;
      `
    case 'info':
      return `
        --btn-bg-color: #4DA6B3;
        --btn-border-color: #4DA6B3;
        --btn-text-color: #ffffff;
      `
    case 'success':
      return `
        --btn-bg-color: #5DE290;
        --btn-border-color: #5DE290;
        --btn-text-color: #ffffff;
      `
    case 'danger':
      return `
        --btn-bg-color: #E34F4F;
        --btn-border-color: #E34F4F;
        --btn-text-color: #ffffff;
      `
  }
}

export const Button = styled.button<ButtonStyles>`
  ${props => handlePadding(props.size, props.isIcon)}
  ${props => handleSize(props.size, props.isIcon)}
  ${props => handleToggle(props.toggled)}
  ${props => handleVariant(props.variant)}

  color: inherit;
  background-color: #ffffff;
  border-radius: 17px;
  cursor: pointer;

  background-color: var(--btn-bg-color);
  border: 1px solid var(--btn-border-color);
  color: var(--btn-text-color);

  border-color: var(--btn-border-color);

  font-size: var(--btn-font-size);

  width: var(--btn-width);
  min-width: var(--btn-min-width);

  padding: var(--btn-padding);

  transition: border-color 0.2s ease;

  &:hover {
    border-color: #4DA6B3;
    transition: border-color 0.2s ease;
  }
`;