import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
