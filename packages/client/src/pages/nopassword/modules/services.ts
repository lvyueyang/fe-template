import { AIP_FIX } from '@/constants';
import { type UserAdminForgetPasswordDto, type UserAdminInfo } from '@/interface/serverApi';
import request from '@/services/request';

export const forgetPassword = async (body: UserAdminForgetPasswordDto) => {
  return await request.post<UserAdminInfo>(`${AIP_FIX}/forget-password`, body);
};
