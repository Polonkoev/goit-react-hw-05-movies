import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: aqua;
  font-size: 18px;
  &.active {
    color: red;
  }
`;
export const SNav = styled.nav`
  background-color: #fff;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  /* justify-content: center; */

  width: 100%;
  height: 60px;

  box-shadow: 0px 2px 2px 2px rgba(0, 255, 255, 0.5);
  transition: top 0.5s;
  z-index: 1;
`;
export const SList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const SH2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;
