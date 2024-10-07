/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';
import * as S from './Partners.styled';

interface PartnersItem {
  active: any;
  imageSrc: string;
  altText: string;
}

const ParceirosItems: PartnersItem[] = [
  {
    imageSrc: "https://oceanica.org.br/wp-content/uploads/2019/07/apoios-e1564360744335.jpg",
    altText: "Apoio",
    active: undefined
  },
  {
    imageSrc: "https://oceanica.org.br/wp-content/uploads/2021/11/apoio-e1636637037449.png",
    altText: "Apoio",
    active: undefined
  },
  {
    imageSrc: "https://oceanica.org.br/wp-content/uploads/2019/07/parceiros_1-e1564360752190.jpg",
    altText: "Parceiros",
    active: undefined
  },
];

const Partners: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% do componente precisa estar visível
  });

  return (
    <S.Container ref={ref} className={inView ? 'fade-in' : ''}>
      <S.TitleParceiros>Parceiros</S.TitleParceiros>
      <Carousel>
        {ParceirosItems.map((item, index) => (
          <Carousel.Item key={index} className={item.active ? 'active' : ''}>
            <img
              className="d-block w-100"
              src={item.imageSrc}
              alt={item.altText}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </S.Container>
  );
};

export default Partners;