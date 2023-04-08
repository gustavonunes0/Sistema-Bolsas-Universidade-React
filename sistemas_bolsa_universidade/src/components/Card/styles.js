import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 26rem;
  padding: 5%;
  box-shadow: 5px 8px 15px 2px #c4c4c4;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  gap: 0.9rem;
`;

export const Imagem = styled.img`
width: 100%;
border-radius: 0.5rem;
height: 10rem;
object-fit: cover;
`;

export const Titulo = styled.h1`
  font-size: 1.35rem;
  color: #000;
`;

export const Curso = styled.h3`
  font-size: 1.1rem;
  color: #000;
`;

export const Status = styled.span`
  font-size: 0.9rem;
  color: #000;
`;
export const DataInicio = styled.span`
  font-size: 0.9rem;
  color: #000;
`;
export const DataTermino = styled.span`
  font-size: 0.9rem;
  color: #000;
`;

export const Botao = styled.button`
  width: 30%;
  height: 5rem;
  background-color: #f4f4f4;
  box-shadow: .2rem .2rem 0rem 0rem #2B8A6F;
  border: none;
  margin-top: 4%;
  border-radius: .3rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;

  &:hover{
    box-shadow: .2rem .2rem 0rem 0rem #fff;
    color: #f4f4f4;
    background-color: #2B8A6F;
  }
`;