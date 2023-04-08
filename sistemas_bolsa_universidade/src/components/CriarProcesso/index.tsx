import * as S from "./styles";
import NavBar from '@/components/Navbar'
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function CriarProcesso() {

return (
    <S.Container>
    <S.Titulo>Criar processo</S.Titulo>
            <S.Form>
              <h3>Título</h3>
              <S.InputBox name="title" required/>
              <h3>Descrição</h3>
              <S.InputBox name="description" required/>
              <h3>Quantidade de vagas</h3>
              <S.InputBox name="qtdVagas" required/>
              <h3>Quantidade de bolsas</h3>
              <S.InputBox name="qtdBolsas" required/>
              <h3>Curso</h3>
              <S.InputBox name="course" required/>
              <h3>Duração</h3>
              <S.InputBox name="duration" required/>
            </S.Form>
            <S.BotaoBox>
              <S.Botao>Salvar</S.Botao>
            </S.BotaoBox>
    </S.Container>
);
}