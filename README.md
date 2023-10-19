# usemediaquery

> Simple hook to listen for media query changes.

## Install

```bash
npm install --save @blocdigital/usemediaquery
```

## Usage

```tsx
import React from 'react';

import useMediaQuery from '@blocdigital/usemediaquery';

const Example = () => {
  const [isMobile] = useMediaQuery('screen and (max-width: 479px)');
  return <div>{isMobile ? 'screen size is less than 480px' : 'screen size is 480px or greater'}</div>;
};
```
