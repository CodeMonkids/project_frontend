import '@/styles/components/atoms/Card.scss';

import { ReactElement } from 'react';

interface IProps {
  title: string;
  text: string;
  image: ReactElement;
}

export default function Card({ title, text, image }: IProps) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className="image-box">{image}</div>
    </div>
  );
}
