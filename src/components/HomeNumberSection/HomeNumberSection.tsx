import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const NumbersSection = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(248, 159, 109, 1);
  box-shadow: 0 8px 32px 0 rgba(248, 159, 109, 0.37);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.75rem;
  }
`;

const StyledNumbersNTitle = styled.div`
  color: white;
  text-align: center;
  background: rgba(248, 159, 109, 0.25);
  box-shadow: 0 8px 32px 0 rgba(248, 159, 109, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  h1 {
    font-size: 2.5rem;
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }
  h5 {
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
`;

interface NumberNTitleProps {
  title: string;
  subTitle: string;
}

const NumberNTitle: React.FC<NumberNTitleProps> = ({ title, subTitle }) => {
  return (
    <StyledNumbersNTitle>
      <h1>{title}</h1>
      <h5>{subTitle}</h5>
    </StyledNumbersNTitle>
  );
};

const HomeSquarearkNumbers = () => {
  const intl = useIntl();
  const numbers: { title: string; subTitle: string }[] = [
    {
      title: '700+',
      subTitle: intl.formatMessage({ id: 'skincare' }),
    },
    {
      title: '500+',
      subTitle: intl.formatMessage({ id: 'beauty' }),
    },
    {
      title: '50+',
      subTitle: intl.formatMessage({ id: 'lifeStyle' }),
    },
    {
      title: '1000+',
      subTitle: intl.formatMessage({ id: 'ambassador' }),
    },
    {
      title: '100+',
      subTitle: intl.formatMessage({ id: 'brands' }),
    },
    {
      title: '50,000+',
      subTitle: intl.formatMessage({ id: 'products' }),
    },
  ];
  return (
    <NumbersSection>
      {numbers.map((num) => (
        <NumberNTitle title={num.title} subTitle={num.subTitle} />
      ))}
    </NumbersSection>
  );
};

export default HomeSquarearkNumbers;
