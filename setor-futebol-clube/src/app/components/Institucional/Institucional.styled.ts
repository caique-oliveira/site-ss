import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  min-height: 500px;
  background: linear-gradient(rgba(15, 23, 43, 0.1), rgba(15, 23, 43, 0.1)), url('/assets/images/video.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PlayButton = styled.button`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 18px 20px 18px 28px;
  background: transparent;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 100px;
    height: 100px;
    background: var(--primary);
    border-radius: 50%;
    animation: pulse-border 1500ms ease-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 100px;
    height: 100px;
    background: var(--primary);
    border-radius: 50%;
    transition: all 200ms;
  }
`;

export const PlayIcon = styled.span`
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 32px solid var(--dark);
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
`;
export const TitleInstitucional = styled.h1`
  color: #feb445!important;
  font-weight: 700 !important;
  font-family: "Montserrat", system-ui;
`;

export const BtnInstitucional = styled.button`
  background: #feb445!important;
  border: #feb445!important;
  font-size: 20px;
  font-weight: bold;
`;
export const BgDark = styled.div`
  background: #000;
`;
