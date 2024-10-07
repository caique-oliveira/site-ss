
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.5s ease-in-out;

  &.fade-in {
    opacity: 1; /* Quando em vista */
    animation: ${fadeInUp} 0.5s forwards; /* Animação de entrada */
  }
`;
export const TitleParceiros = styled.h1`
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #e8cf29;
  padding: 0 20px;
  font-weight: 600;
  font-style: italic;

  &:before {
    content: "";
    position: absolute;
    width: 140px;
    height: 2px;
    top: 50%;
    left: 27%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      left: 20%;
    }

    @media (max-width: 890px) {
      left: 15%;
    }
    
    @media (max-width: 550px) {
      left: 10%;
    }
    
    @media (max-width: 470px) {
      left: 5%;
    }
    @media (max-width: 420px) {
      left: 0%;
    } 
    @media (max-width: 375px) {
      width: 70px!important;
    }   
  }

  &:after {
    content: "";
    position: absolute;
    width: 140px;
    height: 2px;
    top: 50%;
    right: 27%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      right: 20%;
    }
    @media (max-width: 890px) {
      right: 15%;
    }
    @media (max-width: 550px) {
      right: 10%;
    }
    @media (max-width: 470px) {
      right: 5%;
    }
    @media (max-width: 420px) {
      right: 0%;
    }
    @media (max-width: 375px) {
      width: 70px!important;
    }      
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Ajuste do tamanho da fonte em dispositivos móveis */
    padding: 0 10px; /* Ajuste do padding em dispositivos móveis */
    
    &:before {
      width: 100px; /* Reduz a largura dos pseudo-elementos em dispositivos móveis */
    }

    &:after {
      width: 100px; /* Reduz a largura dos pseudo-elementos em dispositivos móveis */
    }
  }
`;