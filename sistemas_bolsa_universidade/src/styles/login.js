import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  font-family: 'Lato', sans-serif;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30%;
  width: 100%;
  align-items: center;
  gap: 15%;
  justify-content: center;
`;

export const Titulo = styled.h1`
  padding: 2.5%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const Botao = styled.button`
  width: 30%;
  border: none;
  border-radius: .5rem;
  padding: 2.5%;
  font-size: 1.4rem;
  font-weight: bolder;
  color: #2B8A6F;
  box-shadow: 0rem 0.5rem 1rem 0rem #c4c4c4;
`;
