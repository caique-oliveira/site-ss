import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 70px;
    background: #f8f8f8;
    @media (max-width: 768px) {
        margin-top: 90px;
    }
`;
export const BoxContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;

export const ImgPartida = styled.img`
   @media (max-width: 768px) {
        width: 900px;
   }

   @media (max-width: 435px) {
        width: 600px;
   }
`;

