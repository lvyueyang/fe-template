import { AIP_FIX } from '@/constants';
import { type UserAdminLoginBody, type UserAdminLoginResponse } from '@/interface/serverApi';
import request from '@/services/request';

export const login = async (body: UserAdminLoginBody) => {
  return await request.post<UserAdminLoginResponse>(`${AIP_FIX}/login`, body);
};
