import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  background-color: #2B8A6F;
  position: fixed;
  font-family: 'Lato', sans-serif;
  `;

export const HeaderBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const Logo = styled.image`
  width: 10rem;
  height: 100%;
`;

export const MenuItem = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 0rem 2rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    filter: brightness(0.85);
  }
`;
