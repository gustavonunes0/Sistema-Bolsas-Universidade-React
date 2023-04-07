import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styles";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/register', { name, email, password, role });
      window.location.href = '/login';
    } catch (err: any) {
      setError(err.response.data.error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Titulo>Registre-se</S.Titulo>
      {error && <p className="error">{error}</p>}
      <S.Texto htmlFor="name">Name:</S.Texto>
      <S.TxtBox
        type="text"
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
      <S.Texto htmlFor="role">Você é coordenador ou estudante?</S.Texto>
      <S.DropDown
        id="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      >
        <option value="coordinator">Coordenador</option>
        <option value="student">Estudante</option>
      </S.DropDown>
      <S.Botao type="submit">Registrar</S.Botao>
    </S.Form>
  );
};

export default RegisterForm;
