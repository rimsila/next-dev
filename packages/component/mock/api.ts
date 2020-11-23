import { httpRequest, catchError } from '../../core/src';

export const api = {
  getUser: (data?: { page: number }) => httpRequest('get', `/users`, {}, data).catch(catchError),
};
