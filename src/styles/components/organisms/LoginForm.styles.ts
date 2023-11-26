import styled from '@emotion/styled';

import addAlpha from '@/libs/addAlpha';

export const Form = styled.form`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 40px;
  border-radius: 50px;

  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0 15px 30px 10px
    ${({ theme }) => addAlpha(theme.palette.pink[300], 0.25)};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.pink[300]};

  ${({ theme }) => theme.typography.NPS.bold};
  font-size: 32px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.palette.common.black};

  ${({ theme }) => theme.typography.NPS.regular};
  font-size: 12px;
`;

export const FlexBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckBoxContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ForgotPassword = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2px;

  & > svg {
    width: 10px;
    height: 10px;
    fill: ${({ theme }) => theme.palette.common.black};
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 35px;
  display: grid;
  place-content: center;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.pink[300]};
  border: none;

  ${({ theme }) => theme.typography.NPS.bold};
  font-size: 15px;

  cursor: pointer;
`;

export const OtherButton = styled(SubmitButton)`
  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: ${({ theme }) => theme.palette.gray[200]} 1px solid;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.palette.gray[200]};
`;
