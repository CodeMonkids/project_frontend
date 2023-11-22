import Button from '@/components/atoms/Button';
import {
  ButtonBox,
  Title,
  Wrapper,
} from '@/styles/components/organisms/Header.styles';

export default function Header() {
  return (
    <Wrapper>
      <Title>ㅁㅁㅈ</Title>
      <ButtonBox>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </Wrapper>
  );
}
