import styled from 'styled-components';

export const CardDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 0;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CardItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CardExmptyMessage = styled.div`
  font-size: 18px;
  margin: 50% auto;
`;
