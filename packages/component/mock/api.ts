import { httpRequest, catchError } from '@wetrial/core';

export const api = {
  getUser: (data?: { page: number }) => httpRequest('get', `/users`, {}, data).catch(catchError),
};
