'use client';

import LoginForm from '@/components/organisms/LoginForm';
import {
  Container,
  Inner,
} from '@/styles/components/templates/AuthTemplate.styles';
import { FormType } from '@/types/auth';

interface Props {
  formType: FormType;
}

export default function AuthTemplate({ formType }: Props) {
  const returnForm = () => {
    switch (formType) {
      case FormType.LOGIN:
        return <LoginForm />;
      default:
        return;
    }
  };
  return (
    <Container>
      <Inner>{returnForm()}</Inner>
    </Container>
  );
}
