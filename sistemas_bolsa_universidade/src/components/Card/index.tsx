import * as S from "./styles";
import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  course: string;
  status: string;
  details: string;
  postId: number;
  startDate: string;
  endDate: string;
  setSelectedPostId: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card: React.FC<CardProps> = ({
  title,
  course,
  status,
  postId,
  startDate,
  endDate,
  setSelectedPostId,
  details,
}) => {
  const handleClick = () => {
    setSelectedPostId(postId);
  };

  return (
    <S.Container>
      <Image alt="" src="/UNIGU.png" style={{width: '100%', height: '100%', borderRadius: '1.5rem 1.5rem 1rem 1rem'}} width={100} height={80}/>
      <S.Titulo>{title}</S.Titulo>
      <S.Curso>{course}</S.Curso>
      <S.Status>{status}</S.Status>
      <S.DataInicio>Inicio: {startDate}</S.DataInicio>
      <S.DataTermino>Fim:{endDate}</S.DataTermino>
      <S.Botao onClick={handleClick}>Detalhes</S.Botao>
    </S.Container>
  );
};

export default Card;
