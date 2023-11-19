import '@/styles/components/organisms/HomeMain.scss';

import ListImage from '@/assets/images/listImage.svg';
import RankingImage from '@/assets/images/rankingImage.svg';
import RestaurantImage from '@/assets/images/restaurantImage.svg';
import Card from '@/components/atoms/Card';

const cardList = [
  {
    title: '맛집 검색',
    text: '주변의 맛집들은  어디있을까?',
    image: <RestaurantImage />,
  },
  {
    title: '맛집 리스트',
    text: '나만의 리스트를 작성하자',
    image: <ListImage />,
  },
  {
    title: '맛집 랭킹',
    text: '오늘의 맛집은 어딜까',
    image: <RankingImage />,
  },
];

export default function HomeMain() {
  return (
    <main>
      <div className="card-list">
        {cardList.map((card) => (
          <Card title={card.title} text={card.text} image={card.image} />
        ))}
      </div>
    </main>
  );
}
