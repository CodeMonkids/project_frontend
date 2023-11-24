import React from 'react';

import CheckBox from '@/components/atoms/CheckBox';
import Input from '@/components/atoms/Input';
import {
  ButtonBox,
  CheckBoxContainer,
  FlexBetween,
  Form,
  Line,
  OtherButton,
  SubmitButton,
  SubTitle,
  Title,
} from '@/styles/components/organisms/LoginForm.styles';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <SubTitle>로그인 정보를 입력해주세요</SubTitle>
      <Input placeholder={'이메일'} />
      <Input placeholder={'비밀번호'} />
      <FlexBetween>
        <CheckBoxContainer>
          <CheckBox id={'autoLogin'} />
          <SubTitle>자동 로그인</SubTitle>
        </CheckBoxContainer>
        <SubTitle>아이디 • 비밀번호 찾기</SubTitle>
      </FlexBetween>
      <ButtonBox>
        <SubmitButton>로그인</SubmitButton>
        <Line />
        <OtherButton>회원가입</OtherButton>
      </ButtonBox>
    </Form>
  );
}
