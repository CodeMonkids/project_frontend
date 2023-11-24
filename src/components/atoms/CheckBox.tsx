import { useState } from 'react';

import {
  CheckBoxLabel,
  NoneInput,
} from '@/styles/components/atoms/CheckBox.styles';

interface Props {
  id: string;
}

export default function CheckBox({ id }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
  return (
    <>
      <NoneInput type={'checkbox'} id={id} />
      <CheckBoxLabel htmlFor={id} isClicked={isClicked} onClick={handleClick} />
    </>
  );
}
