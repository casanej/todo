import styled from "styled-components";

export const ToDo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ToDoCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToDoCalendarDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToDoProgress = styled.div`
`;

export const ToDoFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  > div {
    &:nth-child(1) {
      display: flex;
      gap: 8px;
      flex: 1;
    }

    &:nth-child(2) {
      flex: 1;
    }
  }
`;

export const ToDoList = styled.div`
  height: 280px;
  overflow-y: auto;
`;

export const WarningMessageList = styled.div`
  label {
    text-decoration: underline;
    cursor: pointer;
  }
`;