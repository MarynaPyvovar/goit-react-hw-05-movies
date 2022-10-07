import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #faebf5;
  height: 40px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MainNavLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: black;

  &.active {
    font-size: larger;
    color: #cc0066;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #cc0066;
  }
`;
