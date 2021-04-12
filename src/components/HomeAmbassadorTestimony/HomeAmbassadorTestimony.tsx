import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const HomeAmbassadorTestimonyWrapper = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
`;

const HomeAmbassadorTestimony = () => {
  const intl = useIntl();
  return (
    <HomeAmbassadorTestimonyWrapper>
      <h1>Meet our Ambassador</h1>
      <p>
        In SquareArk, you can achieve beyond your imagination. We welcome
        Ambassadors from all walks of life!
      </p>
    </HomeAmbassadorTestimonyWrapper>
  );
};

export default HomeAmbassadorTestimony;
