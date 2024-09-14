'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './partida.styled';

interface Produto {
  id: number;
  imagem: string;
}

interface ResponseData {
  produtos: Produto[];
}

export default function Partida() {
  const [data, setData] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = 'http://localhost:3001/produtos';

  async function CarregaDados() {
    try {
      const response = await axios.get<Produto[]>(url);
      console.log('Resposta da API:', response.data);
  
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        throw new Error("Dados inesperados da API");
      }
    } catch (error: any) {
      console.error("Erro ao carregar os dados:", error.message || error);
      setError("Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    CarregaDados();
  }, []);

  useEffect(() => {
    console.log('Dados carregados:', data);
  }, [data]);

  return (
    <S.Container>
      <S.BoxContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data.length > 0 ? (
          data.map(produto => (
            <div key={produto.id}>
              <S.ImgPartida src={produto.imagem} alt={`Produto ${produto.id}`} />
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </S.BoxContainer>
    </S.Container>
  );
}
