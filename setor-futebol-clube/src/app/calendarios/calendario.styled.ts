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

export const TitleCalendar = styled.h1`
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #e8cf29;

      
  @media (max-width: 768px) {
      margin-top: 8rem;
  }

  &:before {
    content: "";
    position: absolute;
    width: 140px;
    height: 2px;
    top: 18%;
    left: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      left: 10%;
    }
    
    @media (max-width: 768px) {
      top: 29%;
    }
    @media (max-width: 550px) {
      left: 5%;
    }
    
    @media (max-width: 470px) {
      left: 0%;
    }
    @media (max-width: 605px) {
      width: 70px!important;
    }
    @media (max-width: 465px) {
      width: 50px!important;
    }
    @media (max-width: 360px) {
      width: 35px!important;
    }              
  }

  &:after {
    content: "";
    position: absolute;
    width: 140px;
    height: 2px;
    top: 18%;
    right: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      right: 10%;
    }

    @media (max-width: 768px) {
      top: 29%;
    }
    @media (max-width: 550px) {
      right: 5%;
    }
    @media (max-width: 420px) {
      right: 0%;
    }
    @media (max-width: 605px) {
      width: 70px!important;
    }
    @media (max-width: 465px) {
      width: 50px!important;
    }
    @media (max-width: 360px) {
      width: 35px!important;
    }            
  }
`;
export const subTextCalendar = styled.p`
  display: flex;
  text-aling: center;
  margin: 0 auto;
  font-size: 18px;
`;
