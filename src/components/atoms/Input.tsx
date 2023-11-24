import { StyledInput } from '@/styles/components/atoms/Input.styles';

interface Props {
  placeholder: string;
}

export default function Input({ placeholder }: Props) {
  return <StyledInput type={'text'} placeholder={placeholder} />;
}
