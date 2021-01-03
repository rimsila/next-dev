---
title: authority/token
order: 5
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: 'Core library'
  path: /
---

# authority

Provide related methods for obtaining tokens, permissions, etc.

## How to use

```tsx |pure
import { setToken, getToken } from '@next-dev/core/es/authority';

const token = getToken();
```

## Methods

| Name | Description | Type |
| --- | --- | --- | --- |
| setToken | Save the token to the client, token: the value of `token` to be stored, `exp`: expiration time (seconds) | `(token:string,exp?number)=>void` |
| getToken | Get the current token value | `()=>string` |
| clearToken | Delete the currently saved token, used to log out the scene | `()=>void` |
| getPermissions | Get current user permissions | `(permission?:string)=>string[]` |
| setPermissions | Save permissions locally | `(permissions?:string | string[])=>void` |
| clearPermissions | Clear the current permissions, used to log out the scene | `()=>void` |
