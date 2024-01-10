import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

import routers from "../routes/routers";
import { Link } from "react-router-dom";
import Container from "./Container";

const Headers = styled.header`
  background: #374151;
  padding: 20px;
`;

const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 80px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2em;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Header = () => {
  return (
    <Headers>
      <Content>
        <Logo href="/">
          <LogoImg src={logo} alt="React logo" />
        </Logo>
        <List>
          {routers.map(({ name, path }, index) => (
            <li key={index}>
              <Links to={path}>{name}</Links>
            </li>
          ))}
        </List>
      </Content>
    </Headers>
  );
};

export default Header;
