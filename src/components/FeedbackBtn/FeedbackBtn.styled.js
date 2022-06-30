import styled from 'styled-components';

export const Btn = styled.button`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[5]}px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.space[5]}px;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
    box-shadow: ${({ theme }) => theme.shadows.btn};
  }
`;
