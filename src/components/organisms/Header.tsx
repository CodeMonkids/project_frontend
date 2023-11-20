import Button from '@/components/atoms/Button';

export default function Header() {
  return (
    <header className="w-full h-[70px] flex justify-between items-center px-[150px] bg-common-white">
      <h1 className="text-pink-300 text-5xl">뭐먹지</h1>
      <div className="flex justify-between gap-5">
        <Button value={'로그인'} size={'14px'} />
        <Button value={'회원가입'} size={'14px'} />
      </div>
    </header>
  );
}
