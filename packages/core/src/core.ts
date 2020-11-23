export type IWithFalse<T> = T | false;

/**
 * Key value abbreviation
 */
export interface IKeyValue<T = any> {
  [key: string]: T;
}

/**
 * Encryption type
 */
export enum CryptoType {
  /**
   * Incoming encryption
   */
  In = 1,
  /**
   * Outgoing encryption
   */
  Out = 2,
  /**
   * Incoming + outgoing are encrypted
   */
  Both = 4,
}
