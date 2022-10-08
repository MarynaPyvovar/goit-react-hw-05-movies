import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsWrapper = styled.div`
  padding: 10px 20px;
`;

export const FilmInformation = styled.div`
  display: flex;
`;

export const FilmPoster = styled.img`
  width: 400px;
`;

export const Info = styled.div`
  padding: 20px;
`;

export const FilmTitle = styled.h1`
  margin: 0;
  color: #862d59;
`;

export const FilmSubtitle = styled.h2`
  margin: 0;
  color: #862d59;
`;

export const DetailsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

export const DetailsLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 10px;
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

export const BackLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 10px;
  color: black;

  :hover,
  :focus {
    color: #cc0066;
  }
`;
