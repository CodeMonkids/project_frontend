import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 80px 150px 0;
  background-color: ${({ theme }) => theme.palette.gray[100]};
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
