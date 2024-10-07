'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as S from './Header.styled';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/assets/logo/logo_ss.png';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignIn, faMapLocationDot, faCalendarDays, faCommentsDollar, faFileSignature } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Aplica a classe fade-in ao montar o componente
    setHasScrolledDown(true);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <S.GlobalStyle />
      <S.Nav className={hasScrolledDown ? 'fade-in' : ''}>
        <S.NavHeader>
        
            <S.LogoWrapper>
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="logo setor futebol clube"
                style={{
                  height: '70px',
                  width: '60px',
                }}
              />
              </Link>
              <S.TitleHeader />
            </S.LogoWrapper>
          <S.NavList $isOpen={isOpen}>
            <S.NavItem>
            <FontAwesomeIcon icon={faHome} 
              style={{ fontSize: '0.2rem', 
              color: '#fff',
              marginRight: '10px' 
             }} 
             />
              <S.NavLink href="/" active={isActive('/#home')}>
                Home
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <FontAwesomeIcon icon={faCommentsDollar} aria-hidden="true" 
                 style={{ fontSize: '0.2rem', 
                  color: '#fff',
                  marginRight: '10px' 
                 }} 
              />
              <S.NavLink href="/arena">
                Arena Setor
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
            <FontAwesomeIcon icon={faFileSignature} aria-hidden="true"
               style={{ fontSize: '0.2rem', 
                color: '#fff',
                marginRight: '10px' 
               }} 
            />
              <S.NavLink href="/projetos">
                Projetos
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
            <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true"
              style={{ fontSize: '0.2rem', 
                color: '#fff',
                marginRight: '10px' 
              }} 
             /> 
              <S.NavLink href="/calendarios">
                Calendários
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>

            <FontAwesomeIcon icon={faMapLocationDot} aria-hidden="true"
              style={{ fontSize: '0.2rem', 
                color: '#fff',
                marginRight: '10px' 
              }} 
             />
              <S.NavLink href="/contatos">
                Contatos
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
            <FontAwesomeIcon icon={faSignIn} aria-hidden="true"
              style={{ fontSize: '0.2rem', 
              color: '#fff',
              marginRight: '10px' 
             }} 
             />
              <S.NavLink href="/login">
                Login
              </S.NavLink>
            </S.NavItem>
            <S.ContainerSocialMedia>
              <SocialIcon
                bgColor="transparent"
                network="facebook"
                url="https://facebook.com"
                style={{
                  height: '40px',
                  width: '40px',
                  margin: '10px',
                }}
              />
              <SocialIcon
                bgColor="transparent"
                network="instagram"
                url="https://instagram.com"
                style={{
                  height: '40px',
                  width: '40px',
                  margin: '10px',
                }}
              />
              <SocialIcon
                bgColor="transparent"
                network="youtube"
                url="https://youtube.com"
                style={{
                  height: '40px',
                  width: '40px',
                  margin: '10px',
                }}
              />
            </S.ContainerSocialMedia>
          </S.NavList>
          <S.NavBtn onClick={toggleMenu}>
            <S.NavBtnLabel $isOpen={isOpen}>
              <S.NavBtnSpan className={isOpen ? 'bar1' : ''} />
              <S.NavBtnSpan className={isOpen ? 'bar2' : ''} />
              <S.NavBtnSpan className={isOpen ? 'bar3' : ''} />
            </S.NavBtnLabel>
          </S.NavBtn>
        </S.NavHeader>
      </S.Nav>
    </>
  );
}
