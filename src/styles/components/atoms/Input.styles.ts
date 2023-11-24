import styled from '@emotion/styled';

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.pink[100]};
  border: ${({ theme }) => theme.palette.pink[300]} 1px solid;

  ${({ theme }) => theme.typography.NPS.regular};
  font-size: 16px;

  outline: none;
`;
