---
title: Utils
order: 2
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: 'Core library'
  path: /
---

# utils-auxiliary methods

Provide common auxiliary methods

## How to use

### Import

- For next-dev-boilerplate can `@next-core/utils`;

```tsx |pure
import { isPromise ,.....} from '@next-dev/core/es/utils';
```

### `isPromise`

```tsx |pure
import { isPromise ,sleep} from '@next-dev/core/es/utils';

const isP = isPromise(()=>{
    return new Promise(resolve=>{
        resolve(1)
    });
}));

```

### `sleep`

```tsx |pure
await sleep(2000);
```

## Methods

| Name | Description | Type |
| --- | --- | --- |
| sleep | wait time from promise | `(ms:number)=> void` |
| urlToList | Convert routing to list form | `(url?:string)=>string[]` |
| isPromise | Determine whether it is a Promise object | `(obj)=>boolean` |
| isUrl | Determine whether it is a legal url | `(path:string)=>boolean` |
| getQuery | Get query string | `(query?:string)=>Object` |
| isBrowser | Determine whether it is a browser environment | `()=>boolean` |
| listToFlat | Convert list dictionary to object | `(any[])=>Object` |
| getDateString | Date format, in the format of moment | `({date,format})=>string` |
| fixedZero | Less than two digits complement 0 | `(val:number)=>string` |
| newGuid | Generate a guid | `(withSplit?:boolean)=>string` |
| formatSecuredInfo | Code display | `(text,type,filterNA?)=>string` |
| mergeCells | Merging adjacent rows of the data source by key and returning the generated inter-row objects. It is recommended to use memoizeOne for caching calls | - |
