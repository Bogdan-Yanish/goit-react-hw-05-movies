import styled from 'styled-components';

export const ReviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  font-size: 10px;
  color: ${p => p.theme.colors.text};
`;

export const ReviewsTitle = styled.h4`
  color: ${p => p.theme.colors.accent};
`;
