'use client';

import Link from 'next/link';

import Button from '@/components/atoms/Button';
import {
  ButtonBox,
  Title,
  Wrapper,
} from '@/styles/components/organisms/Header.styles';
import { Page } from '@/types/page';

export default function Header() {
  return (
    <Wrapper>
      <Link href={Page.HOME}>
        <Title>ㅁㅁㅈ</Title>
      </Link>
      <ButtonBox>
        <Link href={Page.LOGIN}>
          <Button>로그인</Button>
        </Link>
        <Link href={Page.SIGNUP}>
          <Button>회원가입</Button>
        </Link>
      </ButtonBox>
    </Wrapper>
  );
}
