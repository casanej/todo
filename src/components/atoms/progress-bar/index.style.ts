import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: relative;
`;

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

export const AnimationContainer = styled.div`
  position: absolute;
  top: -259px;
  right: -250px;
  z-index: 1;
  pointer-events: none;

  overflow: hidden;
`;