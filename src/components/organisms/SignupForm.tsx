'use client';

import Link from 'next/link';
import React from 'react';

import Input from '@/components/atoms/Input';
import {
  ButtonBox,
  Line,
  OtherButton,
  SubmitButton,
} from '@/styles/components/organisms/Authentication.styles';
import {
  Form,
  SubTitle,
  Title,
} from '@/styles/components/organisms/Authentication.styles';
import { Page } from '@/types/page';
import { InputType } from '@/types/type';

export default function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const signupData = {
      name: form.userName.value,
      phoneNumber: form.phoneNumber.value,
      email: form.email.value,
      password: form.password.value,
      rePassword: form.rePassword.value,
    };
    console.log(signupData);
  };

  return (
    <Form id={'signup-form'} name={'signup-form'} onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <SubTitle>회원정보를 입력해주세요</SubTitle>
      <Input placeholder={'이름'} name={'userName'} />
      <Input placeholder={'전화번호'} name={'phoneNumber'} />
      <Input placeholder={'이메일'} name={'email'} />
      <Input
        placeholder={'비밀번호'}
        name={'password'}
        type={InputType.PASSWORD}
      />
      <Input
        placeholder={'비밀번호 확인'}
        name={'rePassword'}
        type={InputType.PASSWORD}
      />
      <ButtonBox>
        <SubmitButton type={'submit'}>회원가입</SubmitButton>
        <Line />
        <Link href={Page.LOGIN}>
          <OtherButton type={'button'}>로그인</OtherButton>
        </Link>
      </ButtonBox>
    </Form>
  );
}
