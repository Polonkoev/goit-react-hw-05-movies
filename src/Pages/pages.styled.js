import { Link } from 'react-router-dom';
import styled from 'styled-components';

//HomePage

export const TrandTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #60c15c;
`;

export const TrandsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const TrandsListLink = styled(Link)`
  color: #60c15c;
  text-decoration: none;
  cursor: pointer;
`;

// MovieDetails
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #60c15c;
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const OverviewTitle = styled.h3`
  display: flex;
  justify-content: center;

  font-size: 20px;
  color: #b2d129;
`;

export const OverviewDesc = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  font-size: 16px;
  color: #242424;
`;

export const Genres = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-left: 20px;
  color: #b2d129;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  border-bottom: 4px solid #1da585;
`;
export const ListItem = styled.li`
  padding: 10px;
`;

export const A = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 18px;

  text-decoration: none;
  color: #009975;
`;

export const Button = styled.button`
margin-left: 20px;
color: #024024;
background-color: #1bde87;

border: 2px solid #5cabc1;
border-radius: 4px;
cursor: pointer;
&:hover{
background-color: #a41bde;
}
`;


// MovieCredits

export const CastList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;

list-style: none;

`;

// MovieReviews

export const ReviewsList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;

list-style: none;

`;

