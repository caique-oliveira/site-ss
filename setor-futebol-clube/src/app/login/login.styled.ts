import styled from 'styled-components';

export const Container = styled.div`
    max-width: 400px;
    margin: 180px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #000;
}
`;
export const TitleLogin = styled.h1`
    color: #e8cf29;
    text-align: center;
}
`;
export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    height: 45px;
    transition: border 0.2s; 
    padding: 10px;

   &:hover {
    border: 1px solid #e8cf29 !important; // Aplica ao foco
  }
    &:focus {
    border: 1px solid linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(240,241,5,1) 35%, rgba(0,212,255,1) 100%);
  }
}
`;
export const SessionSenha = styled.div`
    margin-top: 15px;
}
`;
export const ContainerLogo = styled.div`
    margin: 0 auto;
    display: flex;
}
`;



export const Buttonlogin = styled.button`
    margin: 15px auto;
    display: flow;
    background: #e8cf29;
    color: #fff;
    width: 200px;
    border: none;
    height: 50px;
    border-radius: 2px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
}
`;

export const TitleSocial = styled.h3`
  color:#e8cf29;
  padding-top: 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Montserrat", system-ui!important;
  float: right;
    margin: 5px auto;
    display: flex;

  @media (max-width: 900px) {
    font-size: 20px;
  }

   @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: 'Setor';
    color: white;
  }

  &::after {
    content: ' Social';
    color: #e8cf29;
  }

  @media (max-width: 768px) {
    margin-left: 20;
    text-align: center;
  }
`;