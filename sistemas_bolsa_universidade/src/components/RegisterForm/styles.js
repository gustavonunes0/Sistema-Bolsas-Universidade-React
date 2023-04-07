import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  font-family: 'Lato', sans-serif;
  background-color: #2B8A6F;
  border-radius: 1rem;
  color: #fff;
  box-shadow: 0rem 0.5rem 1rem 0rem #c4c4c4;
`;

export const Botao = styled.button`
  width: 30%;
  border: none;
  margin-top: 4%;
  border-radius: .2rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
`;


export const DropDown = styled.select`
  width: 30%;
  border: none;
  margin-top: 4%;
  border-radius: .2rem;
  padding: 0.5%;
  font-size: 1rem;
  font-weight: bolder;
  color: #2B8A6F;
`;


export const TxtBox = styled.input`
  width: 60%;
  border: none;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: .2rem;
  padding: 0.5%;
  height: 1.5rem;
  font-size: 0.8rem;
  font-weight: bolder;
  color: #2B8A6F;
`;

export const Texto = styled.label`
  align-self: flex-start;
  margin-left: 20%;
`;

export const Titulo = styled.h2`
  margin-bottom: 5%;
`;
