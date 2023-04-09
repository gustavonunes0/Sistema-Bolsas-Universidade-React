import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styles";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LoginForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        name,
        email,
        password,
      });
  
      // Armazenar o token no armazenamento local do navegador
      localStorage.setItem('token', response.data.token);
  
      Cookies.set('token', response.data.token, { expires: 1 }); // o cookie expira após 1 dia
      
      // Configuração de cabeçalho para enviar o token como autorização
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      };
  
      window.alert("Deu certo")
      router.push('/');
      console.log(response.data);
    } catch (error) {
      window.alert("Email ou senha incorretos")      
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };
  

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Titulo>Login</S.Titulo>
      {error && <p className="error">{error}</p>}
      <S.Texto htmlFor="name">Nome:</S.Texto>
      <S.TxtBox
        type="name"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <S.Texto htmlFor="email">Email:</S.Texto>
      <S.TxtBox
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <S.Texto htmlFor="password">Senha:</S.Texto>
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
