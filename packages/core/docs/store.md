---
title: store/local storage
order: 3
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: 'Core library'
  path: /
---

# store-local storage

Provide local storage related methods

## How to use

```tsx |pure
import store from '@next-dev/core/es/store';

store.set('', '');
```

## Methods

| Name | Description | Type |
| --- | --- | --- |
| set | Key-value pairs, stored locally, with expiration time | `(key:string,val:any,exp?:number)=>void` |
| get | Get cache object | `(key:string)=>any` |
| remove | Remove specified cache | `(key:string)=>void` |
| clear | Clear all caches | `()=>void` |

## Other

The store repository is mainly for local storage with expiration time. It is recommended to use sessionStorage, localStorage, etc. according to the situation if it is not required.
