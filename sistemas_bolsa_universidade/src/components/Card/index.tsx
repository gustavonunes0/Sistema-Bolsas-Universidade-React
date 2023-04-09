import * as S from "./styles";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  course: string;
  status: string;
  postId: string;
  details: string;
  startDate: string;
  endDate: string;
  handleCardClick: (postId: string) => void;
}

const Card = ({ title, course, status, postId, details, startDate, endDate, handleCardClick }: CardProps) => {

  return (
    <S.Container>
      <Image alt="" src="/UNIGU.png" style={{width: '100%', height: '100%', borderRadius: '1.5rem 1.5rem 1rem 1rem'}} width={100} height={80}/>
      <S.Titulo>{title}</S.Titulo>
      <S.Curso>{course}</S.Curso>
      <S.Status>{status}</S.Status>
      <S.DataInicio>Inicio: {startDate}</S.DataInicio>
      <S.DataTermino>Fim: {endDate}</S.DataTermino>
      <S.Botao onClick={() => handleCardClick(postId)}>Detalhes</S.Botao>
    </S.Container>
  );
};

export default Card;
