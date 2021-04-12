import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HomeSquarearkNumbers from '@/components/HomeNumberSection/HomeNumberSection';
import BannerComponent from '@/components/HomeBanner/HomeBanner';
import { useIntl } from 'react-intl';
import { HomeSteps } from '@/components/HomeSteps/HomeSteps';
import HomeAmbassadorTestimony from '@/components/HomeAmbassadorTestimony/HomeAmbassadorTestimony';

const Home: React.FC<PageProps> = () => {
  const intl = useIntl();
  return (
    <main>
      <Layout>
        <SEO title={'Squareark | Home'} />
        <BannerComponent />
        <HomeSquarearkNumbers />
        <HomeSteps />
        <HomeAmbassadorTestimony />
      </Layout>
    </main>
  );
};

export default Home;
