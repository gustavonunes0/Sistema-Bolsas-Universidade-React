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
        {idProcessoSelecionado !== null && (
          <Modal isOpen={true} onClose={() => setIdProcessoSelecionado(null)}>
            <h1>Editar processo {idProcessoSelecionado}</h1>
          </Modal>
        )}
      </S.Container>
    </div>
  );
};


export default DashboardCoords;
