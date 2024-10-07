'use client';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NextMatches from '../NextMatches/NextMatches';
import * as S from './ClassificationTable.styled';

interface Team {
  position: number;
  name: string;
  points: number;
  lastGames: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 530px;
   opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 985px) {
    flex-direction: column; /* Muda a direção para coluna */
  }
`;

const TableContainer = styled.div`
  flex: 2;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;
  padding: 20px;
  margin-right: 20px;
  margin-top: 15px;

  @media (max-width: 985px) {
    margin-right: 0;
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ccc;

    @media (max-width: 387px) {
      padding: 5px;
    }
  }

  th {
    background-color: #f1f1f1;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

const Dot = styled.span<{ color: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 2px;
`;
const NextMatchesContainer = styled.div`
  opacity: 0; /* Inicialmente invisível */
  transform: translateX(-100%); /* Começa fora da tela à esquerda */
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1; /* Fica visível */
    transform: translateX(0); /* Move para a posição original */
  }
`;


const ClassificationTable: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teams');
        const teamsData = Array.isArray(response.data) ? response.data : [];
        setTeams(teamsData);
      } catch (err) {
        console.error("Fetch error:", err);
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleScroll = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove o listener após a primeira vez
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!Array.isArray(teams) || teams.length === 0) return <p>Erro: Dados não carregados corretamente.</p>;

  return (
    <>
    <S.Title>Tabela de Classificação</S.Title>
    <Container ref={containerRef} className={isVisible ? 'visible' : ''}>
      <S.Table>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>Time</th>
            <th>Pontos</th>
            <th>Últ. Jogos</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.position}>
              <td>{team.position}</td>
              <td>{team.name}</td>
              <td>{team.points}</td>
              <td>{team.lastGames.split('').map((result, index) => {
                let color = 'transparent'; // Valor padrão
                if (result === 'g') color = 'green';
                else if (result === 's') color = 'gray';
                else if (result === 'r') color = 'red';

                return <span key={index} style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, margin: '0 2px' }} />;
              })}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <NextMatches ref={containerRef} className={isVisible ? 'visible' : ''} />
    </Container>
    </>
  );
};

export default ClassificationTable;