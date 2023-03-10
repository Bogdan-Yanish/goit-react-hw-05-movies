import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: -3px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 130px;
  margin: 3px;
  flex-grow: 1;
`;

export const CastImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  margin-bottom: 3px;
`;

export const CastName = styled.p`
  display: block;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  margin-top: 5px;
  color: ${p => p.theme.colors.text};
`;
