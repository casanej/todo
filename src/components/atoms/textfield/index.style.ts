import styled from "styled-components";

const PADDING_HORIZONTAL = 16;

export const Textfield = styled.div`
  width: 100%;
  position: relative;
`;

export const TextfieldInput = styled.input`
  padding: 10px ${PADDING_HORIZONTAL}px;
  border: 1px solid #BDBDBD;
  border-radius: 4px;
  min-width: 150px;
  width: 100%;
  color: inherit;

  &:hover {
    border-color: #4DA6B3;
  }

  &:focus, &:active {
    outline: #4DA6B3 auto 10px;
  }
`;

export const TextfieldIconSuffix = styled.div`
  position: absolute;
  right: ${PADDING_HORIZONTAL}px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;