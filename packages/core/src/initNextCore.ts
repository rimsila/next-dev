// Only export high-frequency use, others will be used in the form of import {} from'@wetrial/core/es/xxxx'
import { configBase64Map, configRSAKey } from './crypto';
import { configRoutePrefix } from './route-helper';
import { configGlobalHeader, configRefreshToken, configInstance } from './nextRequest';
import { IKeyValue } from './core';
import { AxiosRequestConfig } from 'axios';

interface IWetrialCoreProps {
  /**
   * Key used for RSA encryption and decryption in crypto
   */
  RSAKey?: string;
  /**
   * The map used by base64 in crypto
   */
  Base64MAP?: string;
  /**
   * Dynamically added routing prefix
   */
  routeProfix?: string;
  /**
   * Dynamically added routing prefix
   */
  /**
   * Customize the global ajax request header
   */
  setGlobalHeader?: () => IKeyValue<string>;
  /**
   * Configure the token replacement request
   */
  configRefreshToken?: () => Promise<any>;
  /**
   * Configure the token replacement request
   */
  configInstance?: AxiosRequestConfig;
}

/**
 * Initialize the configuration of the wetrial core library
 * @param props
 */
export function initNextDevCore(props: IWetrialCoreProps) {
  props.RSAKey && configRSAKey(props.RSAKey);
  props.Base64MAP && configBase64Map(props.Base64MAP);
  props.routeProfix && configRoutePrefix(props.routeProfix);
  props.setGlobalHeader && configGlobalHeader(props.setGlobalHeader);
  props.configRefreshToken && configRefreshToken(props.configRefreshToken);
  props.configInstance && configInstance(props.configInstance);
}
