import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 5%;
  height: 3rem;
  display: flex;
  justify-content: center;
  background-color: #fbf9f9;
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

export const MenuItem = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0rem 2rem;
  color: #2B8A6F;
  text-decoration: none;
  &:hover {
    filter: brightness(0.5);
  }
`;
