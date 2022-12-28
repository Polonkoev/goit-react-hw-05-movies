import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const SearchListLink = styled(Link)`
  color: #60c15c;
  text-decoration: none;
  cursor: pointer;
`;

export const Button = styled.button`
  /* margin-left: 20px; */
  color: #024024;
  background-color: #1bde87;

  border: 2px solid #5cabc1;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #a41bde;
  }
`;
