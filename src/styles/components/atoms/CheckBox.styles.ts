import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NoneInput = styled.input`
  display: none;
`;

export const CheckBoxLabel = styled.label<{ isClicked: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;
  display: grid;
  place-content: center;
  border-radius: 5px;

  color: ${({ theme }) => theme.palette.pink[300]};
  background-color: ${({ theme }) => theme.palette.pink[100]};
  border: ${({ theme }) => theme.palette.pink[300]} 1px solid;

  cursor: pointer;

  ${({ isClicked }) =>
    isClicked &&
    css`
      &::after {
        content: '✔';
        font-size: 12px;
        width: 18px;
        height: 18px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
      }
    `}
`;
