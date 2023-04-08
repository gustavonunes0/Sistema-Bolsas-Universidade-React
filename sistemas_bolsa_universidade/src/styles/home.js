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
  grid-template-columns: 25% 25% 25%;
  width: 100%;
  gap: 10%;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const FiltrosBox = styled.div`
  display: grid;
  grid-template-columns: 13% 13% 13% 13% 23% 10%;
  width: 100%;
  gap: 2%;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const TxtBox = styled.input`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: .4rem;
  padding: 2.5%;
  height: 2.3rem;
  font-size: 0.9rem;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const DropDown = styled.select`
  width: 100%;
  border: 1px solid #c4c4c4;
  height: 2.3rem;
  border-radius: .4rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const Botao = styled.button`
  width: 100%;
  border: none;
  height: 2.3rem;
  border-radius: .4rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
  &:hover{
    background-color: #2B8A6F;
    color: #fff;
  }

`;
export const BotaoModal = styled.button`
  width: 30%;
  border: none;
  height: 2.3rem;
  border-radius: .4rem;
  padding: 0.5%;
  margin-top: 2%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
  &:hover{
    background-color: #2B8A6F;
    color: #fff;
  }
`;

export const Titulo = styled.h1`
  padding: 2.5%;
  font-size: 5rem;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const TituloModal = styled.h1`
  font-size: 1.5rem;
  margin-top: 2%;
  font-style: italic;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const Texto = styled.h2`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  color: #000;
  padding: .5% 0% .5% 0%;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
