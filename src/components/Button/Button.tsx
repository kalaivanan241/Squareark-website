import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant: string }>`
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  border: 0;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;

  :active {
    border: none;
    outline: none;
  }
  :focus {
    border: none;
    outline: none;
  }
`;

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary' }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
