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

## Http Request

- NOTE: we can import on demand by `import httpRequest from '@next-dev/core/es/httpRequest'` or use `babel import` or `alias` to get small bundle size

```tsx |pure
import { httpRequest, catchError } from '@next-dev/core'; //catchError for global err exception
```

- Get

```tsx |pure
const get = async () => await httpRequest('get', '/users').catch(catchError);
```

- Delete

```tsx |pure
httpRequest('delete', `/users/${id}`).catch(catchError);
```

- Put/Post with Param

```tsx |pure
httpRequest('put', `/users/${id}`, { name: 'xx' }).catch(catchError),

```

### DEMO

<code src="../demos/request.tsx" />
