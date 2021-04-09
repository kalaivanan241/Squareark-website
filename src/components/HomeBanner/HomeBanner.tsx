import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Button from '../Button';

const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto;
`;

const BannerTitle = styled.div`
  flex-basis: 50%;
  flex-grow: 0;

  p {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
`;

const BannerIllustator = styled.div`
  flex-basis: 50%;
  flex-grow: 0;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const BannerTitleHeader = styled.h2`
  margin: 1rem 0;
  font-size: 3rem;
`;

const BannerComponent: React.FC = () => {
  const intl = useIntl();
  return (
    <Banner>
      <BannerTitle>
        <BannerTitleHeader>
          {intl.formatMessage({ id: 'homeBannerTitle' })}
        </BannerTitleHeader>
        <p>
          <FormattedMessage id="homeBannerPara" />
        </p>
        <Button>{intl.formatMessage({ id: 'Become our ambassador' })}</Button>
      </BannerTitle>
      <BannerIllustator>
        <ReactSVG src="./analyze.svg" />
      </BannerIllustator>
    </Banner>
  );
};

export default BannerComponent;
