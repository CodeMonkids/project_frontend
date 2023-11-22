import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;

  color: ${({ theme }) => theme.palette.text.main};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 32px;
  font-weight: 800;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;
