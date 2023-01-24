import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieData = styled.div`
  max-width: 768px;
`;

export const AddListItem = styled.li`
  color: ${p => p.theme.colors.title};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const MoveInfoTitle = styled.h2`
  color: ${p => p.theme.colors.title};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;
background-color: lightgrey;
margin-bottom: 10px;

&.active {
  color: white;
  background-color: ${p => p.theme.colors.accent};
}

:hover:not(.active),
:focus-visible:not(.active) {
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
}
}
`
