import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HomeSquarearkNumbers from '@/components/HomeNumberSection/HomeNumberSection';
import BannerComponent from '@/components/HomeBanner/HomeBanner';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

interface IStep {
  svg: string;
  title: string;
  desc: string;
}

const StepItemWrapper = styled.div`
  background: rgba(248, 159, 109, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  width: 20rem;
  height: 20rem;
  align-items: center;

  :nth-child(odd) {
    transform: translateX(-30vw) translateY(10vh) rotate(45deg);
  }
  :nth-child(even) {
    transform: translateX(30vw) translateY(10vh) rotate(45deg);
  }
`;

const StepItemContainer = styled.div`
  transform: translateX(-10vw) rotate(-45deg);
`;

const StepItem: React.FC<{ step: IStep }> = ({ step }) => {
  return (
    <StepItemWrapper>
      <StepItemContainer>
        <ReactSVG src={step.svg} />
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </StepItemContainer>
    </StepItemWrapper>
  );
};

const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

const StepsContainer = () => {
  const steps: IStep[] = [
    {
      svg: '',
      title: 'Sign Up',
      desc:
        'Kickstarting your business is way easier than you’ve ever imagine. You need no cost, no barrier, but only passion! Sign up and be our Ambassador in just 30 seconds!',
    },
    {
      svg: '',
      title: 'Share the Link',
      desc:
        'All set? Time to promote your store and skyrocket your sales! Just simply 1 click to share your online store through your personalized link.',
    },
    {
      svg: '',
      title: 'Sales & Order Track',
      desc:
        'Worried about logistics support? You can always track your sales and order anytime, anywhere in our App. We will deliver your customers’ orders directly.',
    },
    {
      svg: '',
      title: 'Get the Commission',
      desc:
        'Well done! Once your orders have been processed, you will earn a commision for every order you have made. You earned it!',
    },
  ];
  return (
    <div>
      <h1> 4 steps</h1>
      <h4>TO UNLOCK THE POWER OF SOCIAL SELLING</h4>
      <StepsWrapper>
        {steps.map((step, index) => (
          <StepItem step={step} key={index} />
        ))}
      </StepsWrapper>
    </div>
  );
};

const Home: React.FC<PageProps> = () => {
  const intl = useIntl();
  return (
    <main>
      <Layout>
        <SEO title={'Squareark | Home'} />
        <BannerComponent />
        <HomeSquarearkNumbers />
        <StepsContainer />
      </Layout>
    </main>
  );
};

export default Home;
