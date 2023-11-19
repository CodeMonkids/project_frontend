import '@/styles/components/templates/HomePage.scss';

import Header from '@/components/organisms/Header';
import HomeMain from '@/components/organisms/HomeMain';

export default function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <HomeMain />
    </div>
  );
}
