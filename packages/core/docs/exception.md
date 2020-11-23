---
title: Global exception
order: 16
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: 'Core library'
  path: /
---

# exception-global exception

Provide basic exception base class

## How to use

```tsx |pure
import catchError from '@next-dev/core/es/catchError';
```

```tsx |pure
const get = async () => await httpRequest('get', '/users').catch(catchError);
// catchError Global exception
```
