import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 60vw;
  higth: 100vh;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 26pt;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 20px 20px 8px 8px;
  background: none;
  font-weight: 600;
`;
