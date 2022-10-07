import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 400px;
  padding: 5px;
  max-width: 500px;
  background-color: #fff;
  border: 1px solid #cc0066;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 6px;
  background-color: #ffb3d9;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #cc0066;
    color: #fff;
  }
`;
