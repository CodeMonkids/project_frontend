import { useState } from 'react';

import EyeIcon from '@/assets/images/icons/eye.svg';
import EyeClosedIcon from '@/assets/images/icons/eyeClosed.svg';
import {
  EyeButton,
  InputBox,
  StyledInput,
} from '@/styles/components/atoms/Input.styles';
import { InputType } from '@/types/type';

interface Props {
  placeholder: string;
  name: string;
  type?: InputType;
}

export default function Input({
  placeholder,
  name,
  type = InputType.TEXT,
}: Props) {
  const [isClickedEye, setIsClickedEye] = useState(false);

  const handleClickEyeButton = () => setIsClickedEye(!isClickedEye);
  const formatInputType = () => {
    switch (type) {
      case InputType.TEXT:
        return (
          <InputBox>
            <StyledInput type={type} name={name} placeholder={placeholder} />
          </InputBox>
        );
      case InputType.PASSWORD:
        return (
          <InputBox>
            <StyledInput
              type={isClickedEye ? InputType.TEXT : type}
              name={name}
              placeholder={placeholder}
            />
            <EyeButton onClick={handleClickEyeButton}>
              {isClickedEye ? <EyeClosedIcon /> : <EyeIcon />}
            </EyeButton>
          </InputBox>
        );
    }
  };
  return formatInputType();
}
