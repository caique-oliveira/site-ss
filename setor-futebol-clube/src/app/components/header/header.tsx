'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as S from './header.styled';
import Image from 'next/image';
import logo from '../../../../public/assets/logo/logo_ss.png';
import { SocialIcon } from 'react-social-icons';

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
            <Image
              src={logo}
              alt="logo setor futebol clube"
              style={{
                height: '70px',
                width: '60px',
              }}
            />
            <S.TitleHeader />
          </S.LogoWrapper>
          <S.NavList $isOpen={isOpen}>
            <S.NavItem>
              <S.NavLink href="#home" active={isActive('/#home')}>
                Home
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="#about" active={isActive('/#about')}>
                Loja
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="#about" active={isActive('/#about')}>
                Sócio Torcedor
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="#services" active={isActive('/#services')}>
                Comprar ingressos
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
            <S.BtnNoticiasMobile>Notícias</S.BtnNoticiasMobile>
          </S.NavList>
          <S.BtnNoticias>Notícias</S.BtnNoticias>
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
