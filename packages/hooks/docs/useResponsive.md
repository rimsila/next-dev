---
title: useResponsive-Responsive
order: 20
nav:
  title: hooks
  order: 2
  path: /hooks
group:
  title: Dom
  order: 3
  path: /dom
---

# useResponsive-Responsive

Get responsive information.

## Code demo

### Get responsive information in components

<code src="../demos/useResponsive.tsx">

## API

```typescript
interface ResponsiveInfo {
  screen: string;
  size: {
    height: number;
    width: number;
  };
}
function useResponsive(): ResponsiveInfo;
```

### Configuration

The default responsive configuration and bootstrap is consistent:

```javascript
{
    xs: {
     min: -Infinity,
     max: 576,
   },
   sm: {
     min: 576,
     max: 768,
   },
   md: {
     min: 768,
     max: 992,
   },
   lg: {
     min: 992,
     max: 1200,
   },
   xl: {
     min: 1200,
     max: 1600,
   },
   xxl: {
     min: 1600,
     max: +Infinity,
   }
}
```
