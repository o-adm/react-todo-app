import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0rem 2rem;
  background-color: orangered;
  color: #fff;
  position: relative;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  li > a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <h1 className="header__logo">myToDO🧾</h1>
        <MenuItem>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </MenuItem>
        <h3 className="date-now">{new Date().toDateString()}</h3>
      </NavContainer>
    </HeaderContainer>
  );
}
