import '~/lightning-base/src/index.scss';

import React from 'react';
import { Button } from '../src/Button';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const neutral = () => <Button label="Neutral" />;
export const brand = () => <Button variant="brand" label="Brand" />;
export const outlineBrand = () => (
  <Button variant="outline-brand" label="Brand" />
);
