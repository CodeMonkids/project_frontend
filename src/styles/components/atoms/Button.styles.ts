import styled from '@emotion/styled';

export const Wrapper = styled.button`
  display: grid;
  place-content: center;
  padding: 6px 12px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.text.main};
  background-color: ${({ theme }) => theme.palette.pink[100]};
  border: ${({ theme }) => theme.palette.text.main} 1px solid;

  ${({ theme }) => theme.typography.NPS.bold}
  font-size: 15px;

  cursor: pointer;
`;
