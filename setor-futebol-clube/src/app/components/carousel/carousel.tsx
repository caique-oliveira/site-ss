'use client'
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './Carousel.styled';

const Carousel: React.FC = (): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false); // Estado para controle da visibilidade

  const slides = [
    {
      image: "https://sampi.net.br/dir-arquivo-imagem/2024/08/659e64f6a86592578d0b618fddb4c428.jpeg",
      text: "Jogador do São Paulo tem sua maior partida...",
      subText: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet."
    },
    {
      image: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/Zubeldia-comanda-treino-do-Sao-Paulo.png?w=869",
      text: "Barcelona-EQU x São Paulo: Era Zubeldía inicia com maratona de jogos decisivos.",
      subText: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet."
    },
    {
      image: "https://media-manager.noticiasaominuto.com.br/1920/naom_6628eb59560ae.jpeg",
      text: "Confira como Zubeldia manda o São Paulo em sua estreia na Libertadores",
      subText: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet."
    }
  ];

  const imageSlidesRef = useRef<HTMLDivElement[]>([]);
  const bubblesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setIsVisible(false); // Esconde os textos ao mudar de slide
    const intervalId = setInterval(nextImage, 10000); // Trocar a cada 10 segundos

    return () => clearInterval(intervalId);
  }, [current]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [current]);

  const nextImage = () => {
    let newIndex = (current === slides.length - 1 ? 0 : current + 1);
    transitionSlides(current, newIndex);
    setCurrent(newIndex);
  };

  const prevImage = () => {
    let newIndex = (current === 0 ? slides.length - 1 : current - 1);
    transitionSlides(current, newIndex);
    setCurrent(newIndex);
  };

  const transitionSlides = (oldIndex: number, newIndex: number) => {
    if (imageSlidesRef.current[oldIndex]) {
      imageSlidesRef.current[oldIndex].className = "slide-image leftOut";
    }
    if (imageSlidesRef.current[newIndex]) {
      imageSlidesRef.current[newIndex].className = "slide-image leftIn";
    }
    updateBubbles(newIndex);
  };

  const jumpImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const jumpIndex = parseInt(e.currentTarget.id);
    if (jumpIndex === current) return;
    transitionSlides(current, jumpIndex);
    setCurrent(jumpIndex);
  };

  const updateBubbles = (highlight: number) => {
    if (bubblesRef.current[current]) {
      bubblesRef.current[current].style.borderColor = "black";
    }
    if (bubblesRef.current[highlight]) {
      bubblesRef.current[highlight].style.borderColor = "white";
    }
  };

  return (
    <S.GalleryContainer>
      <S.ButtonPrev onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </S.ButtonPrev>
      <S.ButtonNext onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </S.ButtonNext>
      <S.GalleryTrack>
        {slides.map((slide, index) => (
          <S.SlideImage
            key={index}
            ref={(el: HTMLDivElement) => { if (el) imageSlidesRef.current[index] = el; }}
            className={`${index === current ? 'leftIn' : 'leftOut'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {index === current && (
              <S.OverlayContainer>
                <S.OverlayText isVisible={isVisible}>{slide.text}</S.OverlayText>
                <S.OverlaySubText isVisible={isVisible}>{slide.subText}</S.OverlaySubText>
                <S.LinkVermais isVisible={isVisible} href="#">Mais detalhes</S.LinkVermais>
              </S.OverlayContainer>
            )}
          </S.SlideImage>
        ))}
      </S.GalleryTrack>
      <S.GalleryFooter>
        {slides.map((_, index) => (
          <S.BubbleOuter
            key={index}
            onClick={jumpImage}
            id={index.toString()}
            ref={(el) => { if (el) bubblesRef.current[index] = el; }}
          >
            <S.BubbleInner id={index.toString()} />
          </S.BubbleOuter>
        ))}
      </S.GalleryFooter>
    </S.GalleryContainer>
  );
};

export default Carousel;
