// Only export high-frequency use, others will be used in the form of import {} from'@wetrial/core/es/xxxx'

export { default as store } from './store';

export { base64, debase64, encrypt, decrypt, encryptKey, encryptBtoa, decryptAtob } from './crypto';

export type { IWithFalse, IKeyValue } from './core';
export { httpRequest } from './axios-config';
export { catchError } from './error-handler';

export { CryptoType } from './core';

/**
 * Initialize the configuration of the wetrial core library
 * @param props
 */
export function initWetrialCore() {
  // props.RSAKey && configRSAKey(props.RSAKey);
}
