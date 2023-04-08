import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    margin-bottom: 5%;
    margin-top: -2%;
`;

export const BotaoBox = styled.div`
    display: flex;
    gap: 5%;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 2%;
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

export const InputBox = styled.input`
  width: 50%;
  height: 2.5rem;
  border: 1px solid #c4c4c4;
  border-radius: .3rem;
  padding: 0.5%;
  font-size: 1rem;
  color: #000;
  margin-bottom: 2.5%;
`;