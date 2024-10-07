'use client'
import React, { useEffect, useState, forwardRef } from 'react';
import axios from 'axios';
import * as S from './NextMatches.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Match {
  id: number;
  name1: string;
  name2: string;
  gameRound: string;
  homeTeam: string; // URL da imagem
  awayTeam: string; // URL da imagem
  location: string;
  date: string;
}

interface NextMatchesProps extends React.HTMLProps<HTMLDivElement> {
  // Adiciona quaisquer outras props que você queira
}

// eslint-disable-next-line react/display-name
const NextMatches = forwardRef<HTMLDivElement, NextMatchesProps>(({ className, ...props }, ref) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const matchesPerPage = 3;

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Carregando jogos...</p>;

  const startIndex = currentPage * matchesPerPage;
  const currentMatches = matches.slice(startIndex, startIndex + matchesPerPage);

  const nextPage = () => {
    if (startIndex + matchesPerPage < matches.length) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(Math.ceil(matches.length / matchesPerPage) - 1);
    }
  };

  return (
    <S.NextMatches ref={ref} className={className} {...props}>
      <S.TitleGame>Jogos</S.TitleGame>
      <S.ButtonContainer>
        <S.ButtonNext onClick={prevPage}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ width: '20px', height: '35px' }} />
        </S.ButtonNext>
        <S.ButtonNext onClick={nextPage}>
          <FontAwesomeIcon icon={faChevronRight} style={{ width: '20px', height: '35px' }} />
        </S.ButtonNext>
      </S.ButtonContainer>
      <S.UlNextMatches>
        {currentMatches.map((match, index) => (
          <li key={match.id}>
            <S.GameRound>{match.gameRound}</S.GameRound>
            <S.TextLocation>{match.location}&nbsp;</S.TextLocation>
            <S.DataAndTimesEvents>{new Date(match.date).toLocaleString()}</S.DataAndTimesEvents>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <S.ContainerName1>
                <br />
                <S.TeamName1>{match.name1}</S.TeamName1>
                <img src={match.homeTeam} alt="Time da casa" style={{ width: '50px', height: '50px', marginLeft: '40px' }} />
              </S.ContainerName1>
              <S.TextVs>vs</S.TextVs>
              <S.ContainerName2>
                <S.TeamName>{match.name2}</S.TeamName>
                <img src={match.awayTeam} alt="Time visitante" style={{ width: '50px', height: '50px', marginLeft: '40px' }} />
              </S.ContainerName2>
              <br />
            </div>
            <S.TextStayInside>Fique por dentro</S.TextStayInside>
            {index < currentMatches.length - 1 && <hr />}
          </li>
        ))}
      </S.UlNextMatches>
    </S.NextMatches>
  );
});

export default NextMatches;