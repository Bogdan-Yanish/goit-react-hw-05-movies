import styled from 'styled-components';

export const MovieList = styled.ul`
  justify-content: center;
  flex-wrap: wrap;
  margin: -10px;
`;

export const MovieListItem = styled.li`
    display:flex;
    align-items:center;
    gap:5px;
    padding:8px;
    boreder-radius:4px;
    color:${p => p.theme.colors.text};
    font-weight:500;
    font-size:24px;

    // &.active {
    //   background-color: ${p => p.theme.colors.accent};
    //   color:white;
    // }

    :hover:not(.active),
    :focus-visible:not(.active) {
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
    }
`

