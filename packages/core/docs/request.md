---
title: Http Request
order: 1
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: Async
  path: /
---

# request

- nextRequest is customize from axios and provide global handler, crypto, refresh token etc.

Provide ajax request encapsulation, including request interception, response interception, exception handling, etc. (not recommended for direct use)

> Usually one layer is extracted from the project, such as: src/utils/request.ts

```ts | pure
// initNextDevCore in root app.tsx
initNextDevCore({
  configInstance: {
    baseURL: configApp.BASE_PATH,
  },
  setGlobalHeader: () => {
    return {
      // Authorization: '', default Bearer xxx
    };
  },
});

// utils/request.ts
import {
  addRequestInterceptor,
  addResponseInterceptor,
  commonRequestInterceptor,
  commonResponseInterceptor,
} from '@next-core/request';

// Add a request interceptor (automatically bring the Authority request header)
addRequestInterceptor(...commonRequestInterceptor);
// Add response interceptor (handling tip, global error, etc.)
addResponseInterceptor(...commonResponseInterceptor);

export { request, get, post, put, patch } from '@next-dev/core/es';
```

```tsx |pure
//see alias import config in next-dev-boilerplate
import { get, del, post } from '@util/nextRequest';
```

- Get

```tsx |pure
const get = async () => await get('/users');
```

- Delete

```tsx |pure
await del(`/users/${value?.id}`);
```

- Put/Post with Param

```tsx |pure
post(`/users`, {id:1, name: 'xx' }),

```

### DEMO

<code src="../demos/request.tsx" />
