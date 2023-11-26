import AuthTemplate from '@/components/templates/AuthTemplate';
import { FormType } from '@/types/auth';

export default function Login() {
  return <AuthTemplate formType={FormType.LOGIN} />;
}
