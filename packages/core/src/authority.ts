import storeWithExp from './store';

let token_name = `WETRIAL.TOKEN`;

export interface ITokenProps {
  /**
   * token value
   */
  token: string;
  /**
   * Refresh token value
   */
  refreshToken?: string;
}

export const configTokenName = (tokenName: string) => {
  token_name = tokenName;
};

/**
 * Storage token
 * @param {string} token Token value to be stored
 * @param {number} exp Expiration time in seconds
 */
export const setToken = (token: ITokenProps, exp?: number): void => {
  storeWithExp.set(token_name, token, exp);
};

/**
 * Get the current user's token
 */
export const getToken = (): ITokenProps => {
  return storeWithExp.get(token_name) as ITokenProps;
};

/**
 * Clear the current user's token and permissions
 */
export const clearToken = (): void => {
  storeWithExp.remove(token_name);
};
