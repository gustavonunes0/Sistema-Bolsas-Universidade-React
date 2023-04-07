import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  font-family: 'Lato', sans-serif;
  justify-content: center;
`;

export const Linha = styled.div`
  width: 100%;
  height: 3.5rem;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  align-items: center;
  display: grid;
  grid-template-columns: 30% 20% 20% 20%;
  justify-items: center;
  gap: 2rem;
  &:hover{
    background-color: #f4f4f4;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.35rem;
  color: #000;
`;

export const Curso = styled.h3`
  font-size: 1.1rem;
  color: #000;
`;

export const Status = styled.h3`
  font-size: 1.1rem;
  color: #000;
`;

export const Botao = styled.button`
  width: 70%;
  height: 2rem;
  border: none;
  box-shadow: .2rem .2rem 0rem 0rem #2B8A6F;
  border-radius: .5rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
  &:hover{
    color: #f4f4f4;
    background-color: #2B8A6F;
    box-shadow: .2rem .2rem 0rem 0rem #fff;
  }
`;