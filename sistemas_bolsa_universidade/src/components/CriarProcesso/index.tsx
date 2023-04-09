import * as S from "./styles";
import NavBar from '@/components/Navbar'
import { useState } from 'react';
import Modal from '@/components/Modal';
import cookie from 'js-cookie';
import axios from "axios";


export default function CriarProcesso() {
  const authToken = cookie.get('authToken');

  const handleSave = async () => {
    const data = {
      title: (document.getElementsByName('title')[0] as HTMLInputElement).value,
      description: (document.getElementsByName('description')[0] as HTMLInputElement).value,
      qtdVagas: parseInt((document.getElementsByName('qtdVagas')[0] as HTMLInputElement).value),
      qtdBolsas: parseInt((document.getElementsByName('qtdBolsas')[0] as HTMLInputElement).value),
      course: (document.getElementsByName('course')[0] as HTMLInputElement).value,
      status: (document.getElementsByName('status')[0] as HTMLInputElement).value
    };  
    try {
      const response = await axios.post('http://localhost:5000/processes', data, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      });
      console.log(response.data);
      window.alert("Processo salvo!")
    } catch (error) {
      window.alert("Ocorreu um erro!")
      console.error(error);
    }
  };  
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
              <h3>Status</h3>
              <S.InputBox name="status" required/>
              <h3>Inicio</h3>
              <S.InputBox name="startDate" required/>
              <h3>Fim</h3>
              <S.InputBox name="endDate" required/>
            </S.Form>
            <S.BotaoBox>
              <S.Botao onClick={handleSave}>Salvar</S.Botao>
            </S.BotaoBox>
    </S.Container>
);
}