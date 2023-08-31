import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorYZOyUYas_mk11s1CTMBpgNlGotSkkSBJM5kMWFND33EWsH4KNUOnvyFXGtHCZVcc4A&usqp=CAU"
          alt="my logo img"
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 10rem;
  }
`;
export default Header;
