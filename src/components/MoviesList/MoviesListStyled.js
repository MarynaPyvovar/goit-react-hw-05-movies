import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieLinks = styled.ul`
  list-style: none;
`;

export const MovieLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 5px;
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    font-size: 20px;
    color: #cc0066;
  }
`;
