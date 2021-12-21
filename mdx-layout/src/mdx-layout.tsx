import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import styles from './corelayout.module.scss';

import '~/lightning-base/src/index.scss';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={
        <>
          <img
            className={`${styles.logo}`}
            src="https://www.lightningdesignsystem.com/assets/images/logo.svg"
          />
          <h1 className={`${styles.heading}`} style={{ fontWeight: 700 }}>
            React Lightning
          </h1>
        </>
      }
      {...props}
    />
  </MDXProvider>
);
