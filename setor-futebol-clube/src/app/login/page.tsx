'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './login.styled';
import logo from '../../../public/assets/logo/logo_ss.png';
import Image from 'next/image';

interface MockResponse {
  success: boolean;
}

const mockApiLogin = async (email: string, password: string): Promise<MockResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockUser = { email: 'user@example.com', password: '123456' };

      if (email === mockUser.email && password === mockUser.password) {
        resolve({ success: true });
      } else {
        reject(new Error('Credenciais inválidas.'));
      }
    }, 1000);
  });
};

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await mockApiLogin(email, password);
      if (response.success) {
        // Redireciona para a página inicial
        router.push('/'); 
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <S.Container>
        <S.ContainerLogo>
        <Image
                src={logo}
                alt="logo setor futebol clube"
                style={{
                  height: '70px',
                  width: '60px',
                }}
              />
              <S.TitleSocial />
        </S.ContainerLogo>     
      <S.TitleLogin>Login</S.TitleLogin>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <S.Input
            type="email"
            value={email}
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className={isFocused ? 'focused' : ''}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <S.SessionSenha>
          <label>Senha:</label>
          <S.Input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </S.SessionSenha>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <S.Buttonlogin type="submit">Entrar</S.Buttonlogin>
      </form>
    </S.Container>
  );
}