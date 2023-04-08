import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";


const NavBar = () => {
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <S.MenuItem>
            <Image alt="" src="/UNIGU.png" width={180} height={80}/>
          </S.MenuItem>
          <S.Menu>
            <S.MenuItem>
              <Link href={{ pathname: "/" }} style={{textDecoration: 'none', color: '#fff'}}>
                Home
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href={{ pathname: "/dashboardCoord" }} style={{textDecoration: 'none', color: '#fff'}}>
                Dashboard
              </Link>            
            </S.MenuItem>
            <S.MenuItem>
              <Link href={{ pathname: "/login" }} style={{textDecoration: 'none', color: '#fff'}}>
                  Login
              </Link>            
            </S.MenuItem>
          </S.Menu>
        </S.HeaderBox>
      </S.HeaderContainer>
    </>
  );
};

export default NavBar;
