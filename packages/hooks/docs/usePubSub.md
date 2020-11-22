---
title: usePubSub
order: 80
nav:
  title: hooks
  order: 2
  path: /hooks
group:
  title: State
  order: 2
  path: /ui
---

# usePubSub-Publish and Subscribe

Event notification between multiple components can sometimes be a headache. With PubSub, this process can be made easier.

Call `useSubscribe` in the component to subscribe to an event (the component will automatically unsubscribe when it is consumed)

An event can be published through `PubSub.publish`

If necessary, you can use `PubSub.publish` and `PubSub.subscribe` to subscribe and publish in non-components (Note: If you own PubSub.subscribe, please pay attention to call `PubSub.unsubscribe` to cancel subscription)

```js
useSubscribe(event:string,(event:string,data:any)=>void);
```

> When the component is rendered multiple times, the return value obtained by calling `useSubscribe` for each rendering will remain unchanged and will not be subscribed repeatedly.

```js
PubSub.publish((event: string), (data: any));
```

For the case of **child component** notifying **parent component**, we still recommend using `props` to pass an `event` function directly. `useSubscribe` is suitable for event notifications between components that are **far away**, or to share event notifications between **multiple** components.

## Code Demo

### Child component publish parent component subscribe

<code src="../demos/usePubSub.tsx">

## API

```typescript
import {usePublish, PubSub} from'@wetrial/hooks';

useSubscribe(event:string,(event:string,data:any)=>void);
PubSub.publish(event:string,data:any);
```
