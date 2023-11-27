import AuthTemplate from '@/components/templates/AuthTemplate';
import { FormType } from '@/types/auth';

export default function Signup() {
  return <AuthTemplate formType={FormType.SIGNUP} />;
}
