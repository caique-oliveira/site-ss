import styled, { keyframes } from 'styled-components';

interface ArticleItemProps {
  isLeft: boolean;
  urlToImage?: string;
}

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const TitleParceiros = styled.h1`
  position: relative;
  margin: 0 auto;
  text-align: center;
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
    left: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      left: 10%;
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
    top: 50%;
    right: 20%;
    background: #e8cf29;
    transform: translateY(-50%);
    animation: pulse-border 1500ms ease-out infinite;

    @media (max-width: 1235px) {
      right: 10%;
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

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
  @media (max-width: 768px) {
    padding: 0 10px; 
    
    &:before {
      width: 100px;
    }

    &:after {
      width: 100px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;

  &.slide-up {
    animation: ${slideUp} 0.6s ease-out forwards; // Animação para o Container
  }
`;

export const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px; // Espaço entre os itens
  width: 90%;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ArticleItem = styled.li<ArticleItemProps>`
  display: flex;
  height: 550px;
  flex-direction: column;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: ${({ isLeft }) => (isLeft ? '90%' : '800px')};
  background-image: ${({ urlToImage }) => (urlToImage ? `url(${urlToImage})` : 'none')};
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ArticleContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  box-sizing: border-box;
`;

export const ArticleImage = styled.img`
  display: none; 
`;

export const ArticleVideo = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
`;

export const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

export const ArticleDescription = styled.p`
  font-size: 1rem;
  margin: 0 0 15px;
`;

export const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Adicione os estilos para os botões de seta
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
  border-radius: 50%;
  color: #fff;
  font-size: 40px;
  height: 115px;
  border-radius: 5px;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;
