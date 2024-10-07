import styled, { keyframes } from 'styled-components';

// Animações para os textos
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

// Estilos gerais
export const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  align-items: left;
  justify-content: left;
  background-color: #f8f8f8;
  padding: 0rem 1rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 70px;
  padding: 0!important;
`;

export const ButtonPrev = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 9;

  &:hover {
    color: white;
  }
`;

export const ButtonNext = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 9;

  &:hover {
    color: white;
  }
`;

export const GalleryTrack = styled.div`
  aspect-ratio: 168 / 100;
  position: relative;
  width: 100%!important;
  overflow: hidden;
`;

export const SlideImage = styled.div<{ className?: string }>`
  aspect-ratio: 168 / 100;
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.style?.backgroundImage};
  transform: ${(props) => props.className?.includes('In') ? 'translateX(0%)' : 'translateX(100%)'};
  animation: ${(props) => props.className?.includes('In') ? 'slide-left-in .5s 1 forwards' : 'slide-right-out .5s 1 forwards'};
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  color: white;
  text-align: left;
`;

export const OverlayText = styled.p<{ isVisible: boolean }>`
  padding-top: 5%;
  color: #fff;
  padding-left: 5%;
  margin: 0;
  font-size: 35px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 5;
  max-width: 50%;
  box-sizing: border-box;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s forwards;

  @media (max-width: 768px) {
    padding-top: 7%!important;
    max-width: 100%;
    font-size: 4vw;
    padding: 0 10px;
    text-align: center;
  }
`;

export const OverlaySubText = styled.p<{ isVisible: boolean }>`
  margin: 10px 0;
  padding-left: 5%;
  font-size: 20px;
  color: white;
  max-width: 50%;
  box-sizing: border-box;
  font-weight: 400;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s forwards;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 3vw;
    padding: 0 10px;
    text-align: center;
  }
`;

export const LinkVermais = styled.a<{ isVisible: boolean }>`
  margin-left: 5%;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  background: #e8cf29;
  text-align: center;
  margin-top: 10px;
  width: 250px;
  height: 70px;
  padding: 25px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: inline-block;
  line-height: 1.5;
  border-radius: 2px;
  font-weight: 600;
  text-transform: uppercase;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s forwards;

  @media (max-width: 1058px) {
    font-size: 15px;
    width: 200px;
    height: 60px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    padding: 15px;
    text-align: center;
    width: 150px;
    height: 50px;
  }

  @media (max-width: 385px) {
    width: 138px;
    height: 35px;
    padding: 8px;
  }
`;

export const GalleryFooter = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const BubbleOuter = styled.div`
  cursor: pointer;
  border: 3px solid black;
  border-radius: 8px;
`;

export const BubbleInner = styled.div`
  border: 5px solid transparent;
  border-radius: 4px;
`;
