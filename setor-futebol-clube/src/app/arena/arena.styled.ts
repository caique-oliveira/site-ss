import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
  }
`;

export const TitleArena = styled.h1`
  display: flex;
  text-aling: center;
  margin: 0 auto;
`;
export const subTextArena = styled.p`
  display: flex;
  text-aling: center;
  margin: 0 auto;
  font-size: 18px;
`;
