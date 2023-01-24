import styled from 'styled-components';

export const MovieInfoCard = styled.div`
  display: flex;
  max-width: 1200px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.text};
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const MovieInfoImg = styled.img`
  display: block;
  width: 350px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const MovieInfoTitle = styled.h2`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.title};
`;

export const MovieInfoBlock = styled.div`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.title};
`;

export const PreInfoTitle = styled.h3`
  font-size: 12px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.title};
`;

export const RatingStyled = styled.p `
  width: 75px;
  text-align: center;
  padding: 5px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: lightgrey;
  margin-top: 5px;
`
