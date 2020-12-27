import reduce from 'lodash/reduce';
import { parse } from 'querystring';
import moment, { Moment } from 'moment';
import { IKeyValue } from './core';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
/**
 * Split the url into a list
 * @param url The url to be converted
 * @returns the split array
 * @example /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
 */
export function urlToList(url?: string): string[] {
  if (!url || url === '/') {
    return ['/'];
  }
  const urlList = url.split('/').filter((i) => i);
  return urlList.map((_, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}

/**
 * Determine whether the object is a Promise type
 * @param {any} obj the object to be judged
 * @returns {boolean} If yes, return true, otherwise false
 */
export function isPromise(obj: any): boolean {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

/**
 * Determine whether the given string is a URL address
 * @param path address
 * @returns {boolean} If yes, return true, otherwise false
 */
export const isUrl = (path: string): boolean => reg.test(path);

/**
 * Convert an array object into an object object
 * @param items the array to be converted
 * @param key as the attribute name of the key defaults to'label'
 * @param value as the value of the attribute name defaults to'value'
 * @example listToFlat([{label:'label1',value:'001'},{label:'label2',value:'002'}],'value','label')==>{'001' :'label1','002':'label2'}])
 * @returns IKeyValue
 * @summary is recommended to use memoize method to avoid unnecessary conversion and improve performance
 */
export function listToFlat<T>(items: T[], key: string | number = 'value', text: string = 'label') {
  return reduce(
    items,
    (redu: IKeyValue<keyof T>, item) => {
      const reduKey = item[key];
      redu[reduKey] = item[text];
      return redu;
    },
    {},
  );
}

/**
 * Determine whether it is a browser environment
 */
export const isBrowser = () => typeof window !== 'undefined';

/**
 * Get query object
 */
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 *
 * @param {object}
 * @param {Moment} param.date
 * @param {string} param.format format defaults to year, month, and day
 */
export function getDateString({
  date,
  format = 'Y-MM-DD',
}: {
  date: string | Moment;
  format?: string;
}): string {
  if (!date) {
    return '';
  }
  let tempDate: Moment;
  if (typeof date === 'string') {
    tempDate = moment(date);
  } else {
    tempDate = date as Moment;
  }

  if (tempDate) {
    return tempDate.format(format);
  }
  return '';
}

/**
 * Make up two digits (example:02)
 * @param val value
 */
export function fixedZero(val: number): string {
  return val * 1 < 10 ? `0${val}` : `${val}`;
}

/**
 * Generate guid
 * @param withSplit [true|false] Whether with a separator
 */
export function newGuid(withSplit?: boolean): string {
  const tmp = withSplit
    ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx';
  return tmp.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Code display, ex: 18585858585==> 185*****222
 * @param text content before encryption
 * @param type type mobile: mobile phone: phone number fax: fax number mail: email card: bank card identity: ID card name: name
 */
export function formatSecuredInfo(
  text: string,
  type: 'mobile' | 'phone' | 'fax' | 'mail' | 'card' | 'identity' | 'name',
  filterNA?: boolean,
) {
  if (!text) {
    return '';
  }
  if (text.toUpperCase() === 'NA' && filterNA) {
    return text;
  }
  let result = '';
  switch (type) {
    case 'mobile':
      result = text.replace(/(\d{1,3})(\d{5})(\d+)/g, '$1*****$3');
      break;
    case 'phone':
      result = text.replace(/(\d+)(\d{4})/g, '$1*****');
      break;
    case 'fax':
      result = text.replace(/(\d+)(\d{4})/g, '$1*****');
      break;
    case 'mail':
      if (text.indexOf('@') < 5) {
        result = text.substring(1, text.lastIndexOf('@') - 1);
      } else {
        result = text.substring(2, text.lastIndexOf('@') - 2);
      }
      result = text.replace(result, '***');
      break;
    case 'card':
      result = text.replace(/(.+)(.{4})$/gi, (_, m1, m2) => {
        return `${m1.replace(/./gi, '*')}${m2}`;
      });
      break;
    case 'identity':
      result = text.replace(/(\d{4}).*(\w{3})/gi, '$1***********$2');
      break;
    case 'name':
      result = text.replace(/./gi, (_, index, match) => {
        if (index === 0) {
          return '*';
        }
        return match;
      });
      result = text.replace(/./gi, '$1*****');
      break;
    default:
      break;
  }
  return result;
}

/**
 * Merge adjacent rows of the data source by key, and return the generated inter-row object. It is recommended to use memoizeOne for caching calls
 * @param list The list of data sources to be merged
 * @param key key
 * @example mergeCells([{name:'xxg',title:'code'},{name:'Andy Lau',title:'code'},{name:'古天乐',title:'other'}],' title')==>{0:2,1:0,2:1}
 */
export function mergeCells<T>(list: T[], key: string | ((item: T) => string)): IKeyValue {
  const mergeObj = {};
  let startIndex = 0;

  list?.forEach((item, index, arr) => {
    let curValue;
    let preValue;
    if (typeof key === 'string') {
      curValue = item[key];
      preValue = arr[startIndex][key];
    } else {
      curValue = key(item);
      preValue = key(arr[startIndex]);
    }
    mergeObj[index] = 0;
    if (curValue === preValue) {
      mergeObj[startIndex] += 1;
    } else {
      mergeObj[index] = 1;
      startIndex = index;
    }
  });
  return mergeObj;
}
