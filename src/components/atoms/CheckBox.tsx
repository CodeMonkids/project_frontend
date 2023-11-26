import { useState } from 'react';

import {
  CheckBoxLabel,
  NoneInput,
} from '@/styles/components/atoms/CheckBox.styles';
import { InputType } from '@/types/type';

interface Props {
  id: string;
  name: string;
}

export default function CheckBox({ id, name }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
  return (
    <>
      <NoneInput type={InputType.CHECKBOX} id={id} name={name} />
      <CheckBoxLabel htmlFor={id} isClicked={isClicked} onClick={handleClick} />
    </>
  );
}
