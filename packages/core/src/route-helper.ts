/**
 * Filter menu items (group, routes, etc. must be included in the object)
 * @param arr routing array
 * @param groups The list of group names to be filtered
 */
export function filterRoutesByGroups(arr: any[], groups: string[] = []) {
  const result: any[] = [];
  arr.forEach((item) => {
    if (!item.group || groups.indexOf(item.group) !== -1) {
      const newItem = item;
      if (item.routes && item.routes.length > 0) {
        newItem.routes = filterRoutesByGroups(item.routes, groups);
        if (newItem.routes.length > 0) {
          result.push(newItem);
        }
      } else {
        result.push(newItem);
      }
    }
  });
  return result;
}

/**
 * Find the route of the specified gourp from the route (the object must have group, routes, etc.)
 * @param arr routing array
 * @param group specified group name
 */
export function findRouteMenuByGroup(arr: any[], group: string): any {
  let result: any;
  arr.forEach((item) => {
    if (item.group && item.group === group) {
      result = item;
      return;
    }
    if (item.routes && item.routes.length > 0) {
      result = findRouteMenuByGroup(item.routes, group);
      if (result) {
        return;
      }
    }
  });
  return result;
}

// routing prefix
let routePrefix = '';

/**
 * Route prefix to be configured
 * @param prefix routing prefix
 */
export function configRoutePrefix(prefix: string) {
  routePrefix = prefix;
}

/**
 * Set the prefix for the specified route
 * @param arr routing array
 * @param prefix The prefix to be set
 */
export function patchRouteBase(arr: any[]): void {
  if (!routePrefix) {
    return;
  }
  arr.forEach((item) => {
    if (item.path === '/') {
      item.path = `${routePrefix}`;
    } else {
      item.path = `${routePrefix}${item.path}`;
    }

    // Deal with the situation of redirect
    if (item.redirect) {
      if (item.redirect === '/') {
        item.redirect = `${routePrefix}`;
      } else {
        item.redirect = `${routePrefix}${item.redirect}`;
      }
    }

    if (item.routes && item.routes.length > 0) {
      patchRouteBase(item.routes);
    }
  });
}

/**
 * Get routing prefix
 */
export function getRoutePreFix() {
  return routePrefix;
}

// Platform grouping
export const GROUP = {
  /**
   * Platform
   */
  PLATFORM: '0',
  /**
   * Sponsor
   */
  SPONSOR: '1',
  /**
   * Institution
   */
  STUDYSITE: '2',
  /**
   * Ethics
   */
  ETHIC: '3',
  /**
   * SMO
   */
  SMO: '4',
};
