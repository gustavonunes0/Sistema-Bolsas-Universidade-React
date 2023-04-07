import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styles";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post<{ token: string }>('http://localhost:3001/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Ocorreu um erro, por favor tente novamente mais tarde.');
      } else {
        setError('Ocorreu um erro, por favor tente novamente mais tarde.');
      }
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Titulo>Login</S.Titulo>
      {error && <p className="error">{error}</p>}
      <S.Texto htmlFor="email">Email:</S.Texto>
      <S.TxtBox
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <S.Texto htmlFor="password">Password:</S.Texto>
      <S.TxtBox
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <S.Botao type="submit">Login</S.Botao>
    </S.Form>
  );
};

export default LoginForm;
