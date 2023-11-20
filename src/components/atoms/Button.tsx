interface Prop {
  value: string;
  size: string;
}

export default function Button({ value, size }: Prop) {
  return (
    <button
      style={{ fontSize: size }}
      className={`grid place-content-center text-pink-300 bg-pink-100 px-3 py-1.5 rounded border border-pink-300 border-solid`}
    >
      {value}
    </button>
  );
}
