import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;

  button {
    border-radius: 4px;
  }

  input, button {
    &:first-child {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &:not(:first-child(1)) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;