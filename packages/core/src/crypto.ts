/* eslint-disable no-bitwise */
import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';

/**
 * Base64 processing the content
 * @param content to base64 content
 */
export function base64(content: string | object): string {
  const type = typeof content;
  let result = content;
  if (type === 'object') {
    result = JSON.stringify(content);
  } else if (type === 'string' && (content as string).length > 0) {
    const utf8Content = CryptoJS.enc.Utf8.parse(content as string);
    result = CryptoJS.enc.Base64.stringify(utf8Content);
  }
  return result as string;
}

/**
 * Debase64 the content
 * @param content content
 */
export function debase64(content: string): string {
  if (typeof content === 'string' && content.length > 0) {
    const result = CryptoJS.enc.Base64.parse(content);
    return CryptoJS.enc.Utf8.stringify(result);
  }
  return '';
}

// ---------------------------------------------------CryptoJS encryption related------------------------------------

/**
 * Encrypt data content -3des encryption
 * @param content The content to be encrypted
 * @param key key
 * @returns returns the encrypted content
 */
export function encrypt(content: string | object, key: string): string {
  if (key.length !== 32) {
    throw Error('The key length must be 32 bits');
  }
  let body = content;
  if (!body) {
    return '';
  }
  if (typeof body === 'object') {
    body = JSON.stringify(body);
  }

  const keys = CryptoJS.enc.Utf8.parse(key.substr(0, 24));
  const cryptoContent = CryptoJS.TripleDES.encrypt(body, keys, {
    iv: CryptoJS.enc.Utf8.parse(key.substr(24, 8)), // iv offset
    mode: CryptoJS.mode.CBC, // CBC mode
    // mode: CryptoJS.mode.ECB, //ECB mode
    padding: CryptoJS.pad.Pkcs7, // padding processing
  });
  return cryptoContent.toString();
}

/**
 * Decrypt the data-3des decrypt
 * @param cryptoBody encrypted content
 * @param key decryption key
 */
export function decrypt(cryptoBody: string, key: string): string {
  const keys = CryptoJS.enc.Utf8.parse(key);
  const decryptContent = CryptoJS.TripleDES.decrypt(cryptoBody, keys, {
    iv: CryptoJS.enc.Utf8.parse(key.substr(24, 8)), // iv offset
    mode: CryptoJS.mode.CBC,
    // mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  // Convert the data to UTF-8 after parsing
  return decryptContent.toString(CryptoJS.enc.Utf8);
}

/**
 * RAS encryption of the key
 * @param key key
 */
export function encryptKey(key: string): string {
  return rsaEncrypt(key);
}
// -----------------------------------------jsencrypt RSA encryption related------------------------------------

/**
 * RSA key
 */
let RSAKEY =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5HI3rQq9BKcruxYfqgnkhyuI+9CGf1jYsyzWYpdw/3Cv9TX4u5w2GjcYoxzBY5s6ZcXbb4oGoLt9rn93g7sKT01tyUO/iQdYiOTvPsFiqcInMVHhaazBy5nH50owObGs+PRubc8bP+a+DT3vV8+l7TEd/H9pdwok/r7GlIIe5uQIDAQAB';

let B64MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

const B64PAD = '=';

const jsencrypt = new JSEncrypt();
// set the key
jsencrypt.setPublicKey(RSAKEY);

export function configRSAKey(key: string) {
  RSAKEY = key;
  jsencrypt.setPublicKey(RSAKEY);
}

export function configBase64Map(map: string) {
  B64MAP = map;
}

function hex2b64(h: string) {
  let i;
  let c;
  let ret = '';
  for (i = 0; i + 3 <= h.length; i += 3) {
    c = parseInt(h.substring(i, i + 3), 16);
    ret += B64MAP.charAt(c >> 6) + B64MAP.charAt(c & 63);
  }
  if (i + 1 === h.length) {
    c = parseInt(h.substring(i, i + 1), 16);
    ret += B64MAP.charAt(c << 2);
  } else if (i + 2 === h.length) {
    c = parseInt(h.substring(i, i + 2), 16);
    ret += B64MAP.charAt(c >> 2) + B64MAP.charAt((c & 3) << 4);
  }
  while ((ret.length & 3) > 0) {
    ret += B64PAD;
  }
  return ret;
}

/**
 * RSA encryption
 * @param input The content to be encrypted
 */
export function rsaEncrypt(input: string): string {
  let result;
  do {
    result = jsencrypt.getKey().encrypt(input);
  } while (result.length !== 256);
  return hex2b64(result);
}
/**
  // * RSA encryption-If the string to be encrypted is relatively long, you can encrypt in segments, and then return the encrypted string separated by commas
  * @param input The content to be encrypted
  */
export function encryptSection(input: string): string {
  const len = 117; // The maximum length is 117
  const sectionLen = input.length / len;
  const rsaLength = sectionLen % 1 === 0 ? sectionLen : Math.floor(sectionLen) + 1;
  const arr: string[] = [];
  for (let i = 0; i < rsaLength; i++) {
    arr.push(rsaEncrypt(input.substring(i * len, (i + 1) * len)));
  }
  return arr.join(',');
}

/**
  //* encryptSection method with encodeURIComponent
  * @param content encrypted content
  */
export function encryptSectionWithEncode(content: string | object): string {
  let result = content;
  if (typeof content === 'object') {
    result = JSON.stringify(content);
  }
  return encodeURIComponent(encryptSection(result as string));
}

/**
  //* Simply convert content to binary
  * @param data The data to be converted
  */
export function encryptBtoa(data: any[] | object | string): string {
  let strData;
  if (Array.isArray(data) || typeof data === 'object') {
    strData = JSON.stringify(data);
  } else {
    strData = data;
  }
  // Deal with Chinese issues
  strData = encodeURIComponent(strData);
  return btoa(strData);
}

/**
  //* Binary decoding of string content
  * @param data The binary content to be decoded
  */
export function decryptAtob(data: string): string {
  return decodeURIComponent(atob(data));
}
