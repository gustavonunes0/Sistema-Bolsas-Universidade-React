import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import * as S from "../styles/home";
import NavBar from '@/components/Navbar'
import Card from '@/components/Card'
import Modal from '@/components/Modal';

const cardsData = [
  {
    title: 'Bolsa de pesquisa FUNCAP',
    course: 'ADS',
    status: 'Aberto',
    postId: 1,
    details: 'Essa bolsa é direcionada a alunos da UNIGU em parceria com a FUNCAP, iremos trabalhar pesquisando sobre inteligências artificiais',
  },
  {
    title: 'Bolsa de desenvolvimento web',
    course: 'Eng. de Software',
    status: 'Encerrado',
    postId: 2,
    details: 'Nesta bolsa de estudo iremos desenvolver aplicações web utilizando C# para o back-end e ASP.NET para o front-end',
  },
  {
    title: 'Bolsa de Modelagem 3D',
    course: 'Ciência da Computação',
    status: 'Aberto',
    postId: 3,
    details: '',
  },
  {
    title: 'Bolsa FUNCAP para React Native',
    course: 'Ciência da Computação',
    status: 'Aberto',
    postId: 4,
    details: '',
  },
  {
    title: 'Bolsa nova',
    course: 'Estátistica',
    status: 'Encerrado',
    postId: 5,
    details: '',
  }
];



const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCardsData, setFilteredCardsData] = useState(cardsData);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseOptions, setCourseOptions] = useState<string[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    const courses = new Set(cardsData.map((card) => card.course));
    setCourseOptions([...courses]);
  }, []);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = cardsData.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedStatus === '' || card.status === selectedStatus) &&
        (selectedCourse === '' || card.course === selectedCourse)
      );
    });
    setFilteredCardsData(filteredData);
  };

  const handleCardClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  const handleCloseModal = () => {
    setSelectedPostId(null);
  };

  const selectedPost = selectedPostId ? cardsData.find((card) => card.postId === selectedPostId) : null;

  return (
    <>
      <Head>
        <title>UNIGU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <S.Main>
        <S.Titulo>
          NOSSAS BOLSAS
        </S.Titulo>
        <S.FiltrosBox>
          <S.DropDown onChange={handleStatusChange}>
            <option disabled selected hidden>Selecione...</option>
            <option value="Encerrado">Encerrado</option>
            <option value="Aberto">Aberto</option>
          </S.DropDown>
          <S.DropDown onChange={handleCourseChange}>
            <option disabled selected hidden>
              Selecione...
            </option>
            {courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </S.DropDown>
          <S.TxtBox type='date'></S.TxtBox>
          <S.TxtBox type='date'></S.TxtBox>
          <S.TxtBox 
            type='text' 
            placeholder='nome da bolsa' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <S.Botao type="submit" onClick={handleSearch}>Buscar</S.Botao>
        </S.FiltrosBox>
        <S.Container>
          {filteredCardsData.map((card) => (
            <div key={card.postId}>
              <Card
                title={card.title}
                course={card.course}
                status={card.status}
                postId={card.postId}
                details={card.details}
                setSelectedPostId={setSelectedPostId}
              />
              {selectedPostId === card.postId && (
                <Modal isOpen={true} onClose={() => setSelectedPostId(null)}>
                  <S.ModalBox>
                    <img alt="" src="/UNIGU.png" style={{width: '100%', height: '100%', borderRadius: '1.5rem 1.5rem 1rem 1rem'}} width={100} height={80}/>
                    <S.TituloModal>{card.title}</S.TituloModal>
                    <S.Texto>Curso: {card.course}</S.Texto>
                    <S.Texto>Status: {card.status}</S.Texto>
                    <S.Texto>Descrição: {card.details}</S.Texto>
                    <div style={{display: 'flex', gap: '5%', justifyContent: 'flex-end', height: '100%'}}>
                      <S.BotaoModal onClick={() => setSelectedPostId(null)}>Fechar</S.BotaoModal>
                      <S.BotaoModal>Inscreva-se</S.BotaoModal>
                    </div>
                  </S.ModalBox>
                </Modal>
              )}
            </div>
          ))}
        </S.Container>
      </S.Main>
    </>
  );  
}

export default Home;

