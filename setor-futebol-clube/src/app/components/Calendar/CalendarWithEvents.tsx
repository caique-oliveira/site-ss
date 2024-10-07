'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBR from '@fullcalendar/core/locales/pt-br';


interface Event {
  date?: string;
  title: string;
  start?: string;
  end?: string;
  color?: string;
}

const CalendarWithEvents: React.FC = () => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [opacity, setOpacity] = useState(0); // Inicia com opacidade 0

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3001/events');
      if (!response.ok) {
        throw new Error('Erro na resposta da API');
      }
      const data: Event[] = await response.json();
      console.log('Eventos recebidos:', data);
      setEvents(data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        events: events.map(event => ({
          title: event.title,
          start: event.start || event.date,
          end: event.end,
          backgroundColor: event.color,
          borderColor: event.color,
        })),
        locale: ptBR,
        aspectRatio: 2,
      };

      const calendar = new Calendar(calendarRef.current, calendarOptions);
      calendar.render();
    }
  }, [events]);

  // Configurar o Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOpacity(1); // Muda a opacidade para 1 quando o componente entra na tela
        observer.disconnect(); // Desconecta o observer após a primeira visibilidade
      }
    }, { threshold: 0.1 }); // Altera conforme necessário

    if (calendarRef.current) {
      observer.observe(calendarRef.current); // Observa o elemento
    }

    return () => {
      if (calendarRef.current) {
        observer.unobserve(calendarRef.current); // Limpa o observer ao desmontar
      }
    };
  }, []);

  return (
    <div
      ref={calendarRef}
      style={{ opacity: opacity, transition: 'opacity 0.5s ease' }} // Efeito suave
    ></div>

  );
};

export default CalendarWithEvents;
