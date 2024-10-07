import styled from 'styled-components';

export const TitleCalendar = styled.h1`
   position: relative;
    text-align: center;
    color: #333;
    color: #e8cf29;
    margin-top: 15px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    } 

    &:before {
    content: "";
    position: absolute;
    width: 140px;
    height: 2px;
    top: 62%;
    left: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      left: 10%;
    }
    @media (max-width: 985px) {
      top: 63%;
      left: 5%;
    }
    @media (max-width: 768px) {
      width: 85px;
    } 
    @media (max-width: 550px) {
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
    top: 62%;
    right: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      right: 10%;
    }
    @media (max-width: 985px) {
      top: 63%;
      right: 5%;
    }
    @media (max-width: 768px) {
      width: 85px;
    } 
    @media (max-width: 550px) {
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
`;