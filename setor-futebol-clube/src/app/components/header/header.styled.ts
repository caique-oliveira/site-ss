import styled, { createGlobalStyle } from 'styled-components';

interface NavBtnLabelProps {
  $isOpen: boolean;
}

interface NavLinkProps {
  active?: boolean; 
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  opacity: 0; /* Inicialmente invisível */
  transform: translateY(-100%); /* Inicialmente fora da tela, acima */
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out; /* Transições suaves para opacidade e posição */
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;

  &.fade-in {
    opacity: 1; /* Totalmente visível */
    transform: translateY(0); /* Volta para a posição original */
  }

  @media (max-width: 768px) {
    height: 90px;
    padding: 1rem;
  }
`;
export const TitleHeader = styled.h2`
  color:#e8cf29;
  margin-left: 10px;
  padding-top: 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Montserrat", system-ui!important;

  @media (max-width: 900px) {
    font-size: 20px;
  }

   @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: 'Setor';
    color: white;
  }

  &::after {
    content: ' Social';
    color: #e8cf29;
  }

  @media (max-width: 768px) {
    margin-left: 20;
    text-align: center;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center; /* Alinha itens verticalmente */
  justify-content: space-between; /* Espaço entre itens */
  width: 100%;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    flex-direction: row; /* Mantenha a direção dos itens em linha mesmo em dispositivos móveis */
    align-items: center; /* Garante que os itens sejam centralizados verticalmente */
    text-align: center; /* Centraliza o conteúdo em dispositivos móveis */
    padding: 0 1rem; /* Ajuste o padding conforme necessário */
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; /* Impede que o logo encolha */
`;

export const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  white-space: nowrap;
  gap: 2rem;
  list-style-type: none;
  padding: 25px 25px 10px;
  flex: 1;
  justify-content: flex-end;
  margin-left: 2rem;

  @media (max-width: 1090px) {
    gap: 1rem;
    margin-left: 1rem;
    font-size: 0.6rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    margin-left: 0;
    width: 100%;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #000;
    position: absolute;
    top: 70px;
    left: 0;
    height: ${({ $isOpen }) => ($isOpen ? 'calc(125vh - 190px)' : '0')};
    overflow: hidden;
    padding: 10px 0;
    transition: height 0.3s ease-in;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

     li {
      padding-left: 5%;
      height: 60px;

      a{
        font-size: 20px;
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          font-style: normal;
      }
     }
  }
`;

export const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    color: #FFFF00;
  } 
`;

export const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  color: ${({ active }) => (active ? '#FFFF00' : '#efefef')};
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-left: 2%;
  }
`;

export const NavBtn = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 30px;
    padding: 0.2rem;
    z-index: 9;
    color: #fff;
  }
`;

export const NavBtnLabel = styled.div<NavBtnLabelProps>`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & > div {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: 0.4s;
  }

  .bar1 {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'};
  }

  .bar2 {
    opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
  }

  .bar3 {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    width: 35px;
  }
`;

export const NavCheck = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const NavBtnSpan = styled.span`
  display: block;
  width: 25px;
  height: 10px;
  border-top: 2px solid #eee;
`;
