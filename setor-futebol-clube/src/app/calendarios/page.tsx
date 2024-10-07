'use client'
import CalendarWithEvents from '../Components/Calendar/CalendarWithEvents';
import * as S from './calendario.styled';

export default function calendarios() {
    return (
        <>
            <S.TitleCalendar>Calendario</S.TitleCalendar>
                <CalendarWithEvents />
        </>
    );
  }
  