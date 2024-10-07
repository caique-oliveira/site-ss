import styled from 'styled-components';

export const TeamName1 = styled.span`
  font-weight: 700;
  float: left;
  margin-top: 10px;
`;

export const TeamName = styled.span`
  font-weight: 700;
`;

export const TitleGame = styled.h2`
  font-weight: 700;
  color: #e8cf29;
  margin-top: 15px;
`;

export const NextMatches = styled.div`
  display: flex;
  margin-left: 2% !important;
  flex-direction: column;
  margin: 0px auto 0px;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(100, 100, 111, 0.2);
  width: 30%;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  opacity: 0; // Inicia invisível
  transform: translateX(-100%); // Inicia fora da tela
  transition: opacity 0.5s ease, transform 0.5s ease; // Transições


  @media (max-width: 985px) {
    margin-left: 0% !important;
  }
  

  &.visible {
    opacity: 1; // Torna visível
    transform: translateX(0); // Move para a posição original
  }

  @media (max-width: 985px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
`;

export const ButtonNext = styled.button`
  background: none;
  color: #e8cf29 !important;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: white;
  }
`;

export const DataAndTimesEvents = styled.span`
   font-weight: 700;
    margin-bottom: 15px;
    text-align: right;
  justify-content: flex-end;
  padding-right: 5%;
  display: flex;
  @media (min-width: 768px) { 
    text-align: right;
    justify-content: flex-end;
  }
`;

export const GameRound = styled.p`
  font-weight: 700;
  position: absolute;
  margin-top: -55px;
  left: 38%;

  @media (max-width: 985px) {
    left: 46%;
  }
  @media (max-width: 768px) {
    left: 43%;
  }
  @media (max-width: 485px) {
    left: 40%;
  }
  @media (max-width: 390px) {
    left: 38%;
  }
`;

export const UlNextMatches = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const TextVs = styled.span`
  margin-right: 10px;
`;
export const ContainerName1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7%;
`;
export const ContainerName2 = styled.div`
   display: flex;
  align-items: center;
`;
export const TextLocation = styled.span`
  display: flex;
  float: left;
  padding-left: 7%;
`;
export const TextStayInside = styled.a`
  display: flex;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
  color: #e8cf29;
  font-weight: 800;
`;
export const NextMatchesContainer = styled.div`
  display: flex;
    flex-direction: column;
    margin: 15px auto 0px;
    align-items: center;
    background: #fff;
    border: 1px solid rgba(100, 100, 111, 0.2);
    width: 40%;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    opacity: 1;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateX(0);

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 985px) {
    width: 100%;
  }
`;