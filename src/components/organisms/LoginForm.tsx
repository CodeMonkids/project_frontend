'use client';

import Link from 'next/link';
import React from 'react';

import RightArrowIcon from '@/assets/images/icons/rightArrow.svg';
import CheckBox from '@/components/atoms/CheckBox';
import Input from '@/components/atoms/Input';
import {
  ButtonBox,
  CheckBoxContainer,
  FlexBetween,
  ForgotPassword,
  Form,
  Line,
  OtherButton,
  SubmitButton,
  SubTitle,
  Title,
} from '@/styles/components/organisms/Authentication.styles';
import { Page } from '@/types/page';
import { InputType } from '@/types/type';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.email.value,
      password: form.password.value,
      autoLogin: form.autoLogin.checked,
    };
    console.log(loginData);
  };

  return (
    <Form id={'login-form'} name={'login-form'} onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <SubTitle>로그인 정보를 입력해주세요</SubTitle>
      <Input placeholder={'이메일'} name={'email'} />
      <Input
        placeholder={'비밀번호'}
        name={'password'}
        type={InputType.PASSWORD}
      />
      <FlexBetween>
        <CheckBoxContainer>
          <CheckBox id={'autoLogin'} name={'autoLogin'} />
          <SubTitle>자동 로그인</SubTitle>
        </CheckBoxContainer>
        <Link href={Page.FORGOT_PASSWORD}>
          <ForgotPassword>
            <SubTitle>아이디 • 비밀번호 찾기</SubTitle>
            <RightArrowIcon />
          </ForgotPassword>
        </Link>
      </FlexBetween>
      <ButtonBox>
        <SubmitButton>로그인</SubmitButton>
        <Line />
        <Link href={Page.SIGNUP}>
          <OtherButton>회원가입</OtherButton>
        </Link>
      </ButtonBox>
    </Form>
  );
}
