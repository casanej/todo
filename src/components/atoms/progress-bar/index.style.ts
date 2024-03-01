import styled from "styled-components";

export const ProgressBar = styled.progress`
  appearance: none;

  width: 100%;
  height: 2em;
  border-radius: inherit;

  &[value]::-webkit-progress-bar {
    background-color: #E4E4E4;
  }

  &[value]::-webkit-progress-value {
    background-color: #5DE290;
  }
`;