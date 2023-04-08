import { useState } from 'react';
import CriarProcesso from "@/components/CriarProcesso";
import ListaProcessos from "@/components/ListaProcessos";
import * as S from "../styles/estudante";
import NavBar from '@/components/Navbar';
import Modal from '@/components/Modal';

const DashboardEstudante = () => {
  const [selectedOption, setSelectedOption] = useState("Seus processos");
  const [idProcessoSelecionado, setIdProcessoSelecionado] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  
  const listaDeProcessos = [
    {
      idprocesso: 1,
      title: 'Bolsa de Pesquisa FUNCAP',
      status: 'Em andamento',
      course: 'Eng. de Software' 
    },
    {
      idprocesso: 2,
      title: 'Bolsa FUNCAP de React Native',
      status: 'Encerrado',
      course: 'Eng. de Software' 
    },
    {
      idprocesso: 3,
      title: 'Bolsa de desenvolvimento web',
      status: 'Encerrado',
      course: 'Eng. de Software' 
    },
    {
      idprocesso: 4,
      title: 'Bolsa FUNCAP',
      status: 'Em andamento',
      course: 'Eng. de Software' 
    },
  ];

  const handleEditarProcesso = (idprocesso: number) => {
    setIdProcessoSelecionado(idprocesso);
  }
  const handleBuscar = () => {
    const processosFiltrados = listaDeProcessos.filter(processo => processo.status === selectedStatus);
    setProcessosFiltrados(processosFiltrados);
  }

  const [processosFiltrados, setProcessosFiltrados] = useState(listaDeProcessos);

  return (
    <div>
      <NavBar/>
      <S.Container>
        <S.TituloGeral>Aqui é o portal do Aluno, você pode ver todas as suas informações e as bolsas que você se inscreveu!</S.TituloGeral>
        <S.Geral>
          <S.BoxInfos>
          <S.Form>
              <h3>Nome</h3>
              <S.InputBox name="title" required/>
              <h3>Email</h3>
              <S.InputBox name="description" required/>
              <h3>Curso</h3>
              <S.InputBox name="qtdVagas" required/>
              <h3>Senha</h3>
              <S.InputBox name="qtdBolsas" required/>
              <h3>Cargo</h3>
              <S.InputBox disabled name="course" required/>
              <h3>Historico</h3>
              <input name="duration" type='file'/>
            </S.Form>
            <S.BotaoBox>
              <S.Botao>Salvar</S.Botao>
            </S.BotaoBox>
          </S.BoxInfos>
          <S.BoxFiltro>
            <S.Box>
              <S.DropDown onChange={(e) => setSelectedStatus(e.target.value)}>
                <option disabled selected hidden>Selecione...</option>
                <option value="Encerrado">Encerrado</option>
                <option value="Em andamento">Em andamento</option>
              </S.DropDown>
              <S.BotaoBuscar type="submit" onClick={handleBuscar}>Buscar</S.BotaoBuscar>
            </S.Box>
            {selectedOption === "Seus processos" && 
              <ListaProcessos processos={processosFiltrados} onEditarProcesso={handleEditarProcesso} />
            }
            {selectedOption === "Criar processo" && (
              <CriarProcesso />
            )}
            { idProcessoSelecionado !== null && (
              <Modal isOpen={true} onClose={() => setIdProcessoSelecionado(null)}>
                <S.Titulo>Processo {listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.title || ''}</S.Titulo>
                <S.Form>
                  <h3>Status</h3>
                  <S.InputBox name="status" disabled defaultValue={listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.status || ''} />
                  <h3>Curso</h3>
                  <S.InputBox name="course" disabled defaultValue={listaDeProcessos.find(p => p.idprocesso === idProcessoSelecionado)?.course || ''} />
                </S.Form>
                <S.BotaoBox>
                  <S.Botao onClick={() => setIdProcessoSelecionado(null)}>Fechar</S.Botao>
                </S.BotaoBox>
              </Modal>
            )}
          </S.BoxFiltro>
        </S.Geral>
      </S.Container>
    </div>
  );
};


export default DashboardEstudante;
