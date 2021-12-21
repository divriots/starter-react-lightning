import React from 'react';
import { Button as LNButton } from '@salesforce/design-system-react';

type ButtonProps = {
  variant?: 'neutral' | 'brand' | 'outline-brand';
  disabled?: boolean;
  label: string;
};

export const Button = ({ variant = 'neutral', ...props }: ButtonProps) => (
  <LNButton variant={variant} {...props} />
);
