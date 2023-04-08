import { useState } from 'react';
import CriarProcesso from "@/components/CriarProcesso";
import ListaProcessos from "@/components/ListaProcessos";
import * as S from "../styles/estudante";
import NavBar from '@/components/Navbar';
import Modal from '@/components/Modal';

const DashboardEstudante = () => {
  const [selectedOption, setSelectedOption] = useState("Seus processos");
  const [idProcessoSelecionado, setIdProcessoSelecionado] = useState<number | null>(null);
  
  
  const listaDeProcessos = [
    {
      idprocesso: 1,
      title: 'Bolsa de Pesquisa FUNCAP',
      status: 'Em andamento',
      course: 'ADS' 
    },
    {
      idprocesso: 2,
      title: 'Bolsa de desenvolvimento web',
      status: 'Em andamento',
      course: 'Eng. de Software' 
    },
    {
      idprocesso: 3,
      title: 'Bolsa FUNCAP de React Native',
      status: 'Encerrado',
      course: 'Eng. de Software' 
    },
    {
      idprocesso: 4,
      title: 'Bolsa de desenvolvimento web',
      status: 'Encerrado',
      course: 'Eng. de Software' 
    },
  ];

  const handleEditarProcesso = (idprocesso: number) => {
    setIdProcessoSelecionado(idprocesso);
  }

  return (
    <div>
      <NavBar/>
      <S.Container>
        <S.TituloGeral>Aqui é o portal do Aluno, você pode ver todas as bolsas que você se inscreveu!</S.TituloGeral>
        <S.Box>
          <S.DropDown>
              <option disabled selected hidden>Selecione...</option>
              <option value="Encerrado">Encerrado</option>
              <option value="Em andamento">Em andamento</option>
          </S.DropDown>
          <S.BotaoBuscar type="submit">Buscar</S.BotaoBuscar>
        </S.Box>
        {selectedOption === "Seus processos" && 
          <ListaProcessos processos={listaDeProcessos} onEditarProcesso={handleEditarProcesso} />
        }
        {selectedOption === "Criar processo" && (
          <CriarProcesso />
        )}
        { idProcessoSelecionado !== null && (
          <Modal isOpen={true} onClose={() => setIdProcessoSelecionado(null)}>
            <S.Titulo>Editar processo {idProcessoSelecionado}</S.Titulo>
            <S.Form>
              <h3>Título</h3>
              <S.InputBox name="title" defaultValue={listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.title || ''} />
              <h3>Status</h3>
              <S.InputBox name="status" defaultValue={listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.status || ''} />
              <h3>Curso</h3>
              <S.InputBox name="course" defaultValue={listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.course || ''} />
            </S.Form>
            <S.BotaoBox>
              <S.Botao onClick={() => setIdProcessoSelecionado(null)}>Fechar</S.Botao>
            </S.BotaoBox>
          </Modal>
        )}
      </S.Container>
    </div>
  );
};


export default DashboardEstudante;
