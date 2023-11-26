import styled from '@emotion/styled';

export const InputBox = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.pink[100]};
  border: ${({ theme }) => theme.palette.pink[300]} 1px solid;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.pink[100]};

  ${({ theme }) => theme.typography.NPS.regular};
  font-size: 16px;

  border: none;
  outline: none;
`;

export const EyeButton = styled.button`
  height: 100%;
  display: grid;
  place-content: center;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.palette.pink[100]};
  border: none;

  cursor: pointer;
  & > svg {
    width: 15px;
    height: 15px;
    fill: ${({ theme }) => theme.palette.common.black};
  }
`;
