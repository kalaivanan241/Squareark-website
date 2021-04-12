import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { useIntl } from 'react-intl';

interface IStep {
  svg: string;
  title: string;
  desc: string;
}

const StepItemWrapper = styled.div`
  /* background: rgba(248, 159, 109, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18); */
  text-align: center;
  width: 50%;
  height: 20rem;
  align-items: center;

  :nth-child(odd) {
    transform: translateX(-20vw);
  }
  :nth-child(even) {
    transform: translateX(20vw);
  }
`;

const StepItemContainer = styled.div`
  /* transform: translateX(-10vw) rotate(-45deg); */
  padding: 1rem;
  svg {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
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
  margin-top: 2rem;
`;

const StepsContainerWraper = styled.div`
  text-align: center;
`;

export const HomeSteps = () => {
  const intl = useIntl();
  const steps: IStep[] = [
    {
      svg: 'undraw_Access_account_re_8spm.svg',
      title: intl.formatMessage({ id: 'signup', defaultMessage: 'Sign Up' }),
      desc: intl.formatMessage({
        id: 'step1_desc',
        defaultMessage:
          'Kickstarting your business is way easier than you’ve ever imagine. You need no cost, no barrier, but only passion! Sign up and be our Ambassador in just 30 seconds!',
      }),
    },
    {
      svg: 'undraw_referral_4ki4.svg',
      title: 'Share the Link',
      desc:
        'All set? Time to promote your store and skyrocket your sales! Just simply 1 click to share your online store through your personalized link.',
    },
    {
      svg: 'undraw_deliveries_131a.svg',
      title: 'Sales & Order Track',
      desc:
        'Worried about logistics support? You can always track your sales and order anytime, anywhere in our App. We will deliver your customers’ orders directly.',
    },
    {
      svg: 'undraw_drag_5i9w.svg',
      title: 'Get the Commission',
      desc:
        'Well done! Once your orders have been processed, you will earn a commision for every order you have made. You earned it!',
    },
  ];
  return (
    <StepsContainerWraper>
      <h1> 4 steps</h1>
      <h4>TO UNLOCK THE POWER OF SOCIAL SELLING</h4>
      <StepsWrapper>
        {steps.map((step, index) => (
          <StepItem step={step} key={index} />
        ))}
      </StepsWrapper>
    </StepsContainerWraper>
  );
};
