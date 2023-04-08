import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    padding: 10% 5% 0% 10%;
`;

export const BotaoBox = styled.div`
    display: flex;
    gap: 5%;
    justify-content: end;
`;

export const Box = styled.div`
    display: flex;
    margin-bottom: 5%;
    place-content: end;
    padding-right: 10%;
    gap: 3%;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 2%;
`;

export const TituloGeral = styled.div`
    font-size: 1.85rem;
    width: 90%;
    font-weight: bolder;
    margin-bottom: 2%;
    color: #2b8a6f;
`;

export const Botao = styled.button`
  width: 20%;
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

export const BotaoBuscar = styled.button`
  width: 13%;
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

export const InputBox = styled.input`
  width: 50%;
  height: 2.5rem;
  border: 1px solid #c4c4c4;
  border-radius: .3rem;
  padding: 0.5%;
  font-size: 1rem;
  color: #000;
  margin-bottom: 3%;
`;

export const DropDown = styled.select`
  width: 15%;
  border: 1px solid #c4c4c4;
  height: 2.3rem;
  border-radius: .4rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
`;