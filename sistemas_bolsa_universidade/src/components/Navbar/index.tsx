import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import cookie from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Estudante' | 'Coordenador'; // Adicione a propriedade role aqui
  password: string;
  course: string;
  historic: string;
}

const NavBar = () => {
  const [user, setUser] = useState<User[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchBolsas = async () => {
      const authToken = cookie.get('authToken');
      if (authToken) {
        setToken(authToken);
        const response = await axios.get<User[]>('http://localhost:5000/user', {
          headers: { 'Authorization': `Bearer ${authToken}` }
        });
        setUser(response.data);
      }
    };
  
    fetchBolsas();
  }, []);
  
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
            <Link href={{ pathname: user.length > 0 && user[0].role === 'Estudante' ? '/dashboardEstudante' : '/dashboardCoord' }} style={{textDecoration: 'none', color: '#fff'}}>
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
