import '@/styles/components/atoms/Button.scss';

interface IProps {
  value: string;
  size: string;
}

export default function Button({ value, size }: IProps) {
  const style = { fontSize: size };
  return (
    <button type="button" style={style}>
      {value}
    </button>
  );
}
