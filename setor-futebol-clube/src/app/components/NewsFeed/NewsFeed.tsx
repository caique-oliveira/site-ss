'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  ArticleList,
  ArticleItem,
  ArticleImage,
  ArticleVideo,
  ArticleContent,
  ArticleTitle,
  ArticleDescription,
  ReadMoreLink,
  TitleParceiros,
  ArrowButton,
} from './NewsFeed.styled';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  urlToVideo?: string;
}

const exampleArticles: Article[] = [
  {
    title: 'Casares sobre anular São Paulo x Flu: Estarrecidos, não há outro caminho',
    description: 'Presidente do São Paulo, Julio Casares comentou, durante o De Primeira, o pedido de anulação do jogo contra o Fluminense, disputado em 1º de setembro, no Maracanã, pelo Brasileirão…',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/09/09/casares-sao-paulo-anulacao-fluminense.htm',
    urlToVideo: 'https://www.youtube.com/embed/4QPPftJJ0ok',
  },
  {
    title: 'Dorival esboça seleção com Endrick titular para enfrentar o Paraguai',
    description: 'Endrick será titular da seleção brasileira contra o Paraguai nesta terça-feira (10), em Assunção, pela oitava rodada das Eliminatórias...',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/09/09/dorival-esboca-selecao-brasileira-com-endrick-para-enfrentar-o-paraguai.htm',
    urlToImage: 'https://conteudo.imguol.com.br/c/esporte/58/2024/06/10/endrick-durante-treino-da-selecao-brasileira-nos-estados-unidos-1718064373602_v2_450x450.jpg', // Imagem de exemplo
  },
  {
    title: 'Campeão mundial critica Mbappé por fala polêmica: não é mais tão decisivo',
    description: 'Campeão mundial em 1998, o francês Bixente Lizarazu criticou Kylian Mbappé pela entrevista após a derrota por 3 a 1 para a Itália, na última sexta-feira (30), pela primeira rodada da Liga das Nações…',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/gazeta-esportiva/2024/09/09/mbappe-e-criticado-por-campeao-mundial-com-a-franca-apos-entrevista-polemica.htm',
    urlToImage: 'https://conteudo.imguol.com.br/c/esporte/55/2024/09/06/mbappe-e-marcado-por-di-lorenzo-durante-jogo-entre-franca-e-italia-pela-liga-das-nacoes-1725656643387_v2_450x600.jpg',
  },
  {
    title: 'Dorival esboça seleção com Endrick titular para enfrentar o Paraguai',
    description: 'Endrick será titular da seleção brasileira contra o Paraguai nesta terça-feira (10), em Assunção, pela oitava rodada das Eliminatórias...',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/09/09/dorival-esboca-selecao-brasileira-com-endrick-para-enfrentar-o-paraguai.htm',
    urlToImage: 'https://conteudo.imguol.com.br/c/esporte/58/2024/06/10/endrick-durante-treino-da-selecao-brasileira-nos-estados-unidos-1718064373602_v2_450x450.jpg', // Imagem de exemplo
  },
  {
    title: 'Campeão mundial critica Mbappé por fala polêmica: não é mais tão decisivo',
    description: 'Campeão mundial em 1998, o francês Bixente Lizarazu criticou Kylian Mbappé pela entrevista após a derrota por 3 a 1 para a Itália, na última sexta-feira (30), pela primeira rodada da Liga das Nações…',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/gazeta-esportiva/2024/09/09/mbappe-e-criticado-por-campeao-mundial-com-a-franca-apos-entrevista-polemica.htm',
    urlToImage: 'https://conteudo.imguol.com.br/c/esporte/55/2024/09/06/mbappe-e-marcado-por-di-lorenzo-durante-jogo-entre-franca-e-italia-pela-liga-das-nacoes-1725656643387_v2_450x600.jpg',
  },
  {
    title: 'Dorival esboça seleção com Endrick titular para enfrentar o Paraguai',
    description: 'Endrick será titular da seleção brasileira contra o Paraguai nesta terça-feira (10), em Assunção, pela oitava rodada das Eliminatórias...',
    url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/09/09/dorival-esboca-selecao-brasileira-com-endrick-para-enfrentar-o-paraguai.htm',
    urlToImage: 'https://conteudo.imguol.com.br/c/esporte/58/2024/06/10/endrick-durante-treino-da-selecao-brasileira-nos-estados-unidos-1718064373602_v2_450x450.jpg', // Imagem de exemplo
  },
];

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(exampleArticles);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // Simula o carregamento de dados
    setTimeout(() => {
      setArticles([...exampleArticles, ...exampleArticles]); // Duplicando para testar o carrossel
    }, 1000); // Simula um atraso
  }, []);

  useEffect(() => {
    // Configura o intervalo para mudar de notícias a cada 10 segundos
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 segundos

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [currentIndex, articles.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % articles.length);
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + 3).concat(
    articles.slice(0, Math.max(0, currentIndex + 3 - articles.length))
  );

  return (
    <Container>
      <TitleParceiros>Últimas Notícias</TitleParceiros>
      <ArticleList>
        {visibleArticles.map((article, index) => (
          <ArticleItem
            key={index}
            isLeft={index === 0}
            urlToImage={article.urlToImage} // Passa a URL da imagem para o estilo
          >
            {article.urlToVideo ? (
              <ArticleVideo src={article.urlToVideo} allowFullScreen />
            ) : (
              article.urlToImage && <ArticleImage src={article.urlToImage} alt={article.title} />
            )}
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>
                {article.description}
                <br />
                <ReadMoreLink href={article.url} target="_blank" rel="noopener noreferrer">
                  Leia mais
                </ReadMoreLink>
              </ArticleDescription>
            </ArticleContent>
          </ArticleItem>
        ))}
      </ArticleList>
      <ArrowButton className="prev" onClick={handlePrev}>&#11164;</ArrowButton>
      <ArrowButton className="next" onClick={handleNext}>&#11166;</ArrowButton>
    </Container>
  );
};

export default NewsFeed;
