import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FilmInformation = styled.div`
  display: flex;
`;

export const FilmPoster = styled.img`
  width: 400px;
`;

export const Info = styled.div`
  padding: 10px;
`;

export const FilmTitle = styled.h1`
  color: #862d59;
`;

export const FilmSubtitle = styled.h2`
  color: #862d59;
`;

export const DetailsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const DatailsLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 5px;
  color: black;

  :hover,
  :focus {
    color: #cc0066;
  }
`;
