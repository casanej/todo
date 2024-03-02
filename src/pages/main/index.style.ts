import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainContainer = styled.div`
  width: 800px;
  height: 650px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  margin: 18px;

  padding: 60px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 768px) {
    height: 98vh;
  }
`;