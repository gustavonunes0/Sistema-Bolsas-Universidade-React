import * as S from "./styles";
import { useState } from 'react';
import Modal from '@/components/Modal';

type Props = {
    processos: {
        idprocesso: number,
        title: string,
        status: string,
        course: string
    }[],
    onEditarProcesso: (idprocesso: number) => void
};

export default function ListaProcessos({ processos, onEditarProcesso }: Props) {

    return (
        <S.Container>
            {processos.map(processo => (
                <S.Linha key={processo.title}>
                    <S.Titulo>{processo.title}</S.Titulo>
                    <S.Status>{processo.status}</S.Status>
                    <S.Curso>{processo.course}</S.Curso>
                    <S.Botao onClick={() => onEditarProcesso(processo.idprocesso)}>Editar</S.Botao>
                </S.Linha>
            ))}
        </S.Container>
    );
}

