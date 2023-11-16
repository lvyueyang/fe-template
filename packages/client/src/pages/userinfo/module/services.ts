import { AIP_FIX } from '@/constants';
import request from '@/services/request';

import { type Result } from '@/types';
import { type UpdatePasswordBody } from './types';

/** 修改密码 */
export const updatePassword = async (body: UpdatePasswordBody) => {
  return await request.post<Result<void>>(`${AIP_FIX}/user/UpdateUserInfo`, body);
};
