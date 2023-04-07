import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";

interface MiniNavBarProps {
    onMenuClick: (menuOption: string) => void;
    selectedOption: string;
  }
  

  const MiniNavBar = ({ onMenuClick, selectedOption }: MiniNavBarProps) => {
    return (
      <>
        <S.HeaderContainer>
          <S.HeaderBox>
            <S.Menu>
              <S.MenuItem onClick={() => onMenuClick("Seus processos")}>
                Seus processos
              </S.MenuItem>
              <S.MenuItem onClick={() => onMenuClick("Criar processo")}>
                Criar processo
              </S.MenuItem>
            </S.Menu>
          </S.HeaderBox>
        </S.HeaderContainer>
        <p>Opção selecionada: {selectedOption}</p>
      </>
    );
  };  

export default MiniNavBar;
