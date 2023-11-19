import '@/styles/components/organisms/Header.scss';

import Button from '@/components/atoms/Button';

export default function Header() {
  return (
    <header>
      <h1 className="title">뭐먹지</h1>
      <div className="button-box">
        <Button value="로그인" size="14px" />
        <Button value="회원가입" size="14px" />
      </div>
    </header>
  );
}
