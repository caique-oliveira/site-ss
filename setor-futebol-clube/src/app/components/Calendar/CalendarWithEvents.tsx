'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBR from '@fullcalendar/core/locales/pt-br'; // Importa a localização em português

interface Event {
  date?: string;   // Data específica para eventos de um único dia
  title: string;
  start?: string;  // Data de início para eventos de múltiplos dias
  end?: string;    // Data de término para eventos de múltiplos dias
}

const CalendarWithEvents: React.FC = () => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

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
          start: event.start || event.date, // Usa `start` se disponível, caso contrário usa `date`
          end: event.end,
        })),
        locale: ptBR,
        aspectRatio: 2, // Ajuste conforme necessário para seu layout
      };
  
      const calendar = new Calendar(calendarRef.current, calendarOptions);
      calendar.render();
    }
  }, [events]);

  return (
    <div ref={calendarRef}></div>
  );
};

export default CalendarWithEvents;
