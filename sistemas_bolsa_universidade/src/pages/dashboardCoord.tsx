import { useState } from 'react';
import MiniNavBar from "@/components/MiniNavBar";
import CriarProcesso from "@/components/CriarProcesso";
import ListaProcessos from "@/components/ListaProcessos";
import * as S from "../styles/coord";
import NavBar from '@/components/Navbar';
import Modal from '@/components/Modal';

const DashboardCoords = () => {
  const [selectedOption, setSelectedOption] = useState("Seus processos");
  const [idProcessoSelecionado, setIdProcessoSelecionado] = useState<number | null>(null);
  const [processoSelecionado, setProcessoSelecionado] = useState(null);
  
  // Array de objetos que representa a lista de processos
  const listaDeProcessos = [
    {
      idprocesso: 1,
      title: 'Bolsa de Pesquisa FUNCAP',
      status: 'Aberto',
      course: 'ADS' 
    },
    {
      idprocesso: 2,
      title: 'Bolsa de desenvolvimento web',
      status: 'Encerrado',
      course: 'Eng. de Software' 
    }
  ];

  const handleMiniNavBarClick = (menuOption: string) => {
    setSelectedOption(menuOption);
  };

  const handleEditarProcesso = (idprocesso: number) => {
    setIdProcessoSelecionado(idprocesso);
  }

  return (
    <div>
      <NavBar/>
      <MiniNavBar onMenuClick={handleMiniNavBarClick} selectedOption={selectedOption} />
      <S.Container>
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
              <S.Botao>Salvar</S.Botao>
              <S.Botao>Encerrar</S.Botao>
              <S.Botao onClick={() => setIdProcessoSelecionado(null)}>Fechar</S.Botao>
            </S.BotaoBox>
          </Modal>
        )}
      </S.Container>
    </div>
  );
};


export default DashboardCoords;
