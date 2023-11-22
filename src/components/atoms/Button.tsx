'use client';

import { Wrapper } from '@/styles/components/atoms/Button.styles';

interface Props {
  children: string;
}

export default function Button({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
