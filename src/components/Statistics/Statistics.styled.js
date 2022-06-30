import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  margin-right: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Numbers = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
