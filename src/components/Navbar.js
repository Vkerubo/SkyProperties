import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s, font-size 0.3s;

  &:hover {
    color: yellow;
    font-size: 28px;
  }
`;

const OtherLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s, font-size 0.3s;

  &:hover {
    color: yellow;
    font-size: 28px;
  }
`;

function Navbar() {
  const navRef = useRef();

  return (
    <Header>
      <LogoContainer>
        <Logo
          src="https://cdn.pixabay.com/photo/2017/04/08/18/46/house-2214100_640.png"
          alt="Company Logo"
        />
        <Title>Sky Properties</Title>
      </LogoContainer>
      <Nav ref={navRef}>
        <HomeLink to="/">
          <FaHome />
        </HomeLink>
        <OtherLink to="/login">Login</OtherLink>
        <OtherLink to="/signup">Sign Up</OtherLink>
        <OtherLink to="/estimate">Get Estimate</OtherLink>
      </Nav>
    </Header>
  );
}

export default Navbar;
