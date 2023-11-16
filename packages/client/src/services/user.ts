import { AIP_FIX, type Result, request } from '@ate/request';
import { type UserAdminInfoResponseDto } from '@/interface/serverApi';
import { TOKEN_COOKIE_KEY } from '@ate/constants';
import { type AxiosProgressEvent } from 'axios';

/** 获取当前登录用户信息 */
export const getUserInfo = async () => {
  return await request.get<UserAdminInfoResponseDto>(`${AIP_FIX}/userinfo`, { ignoreNotice: true });
};

/** 退出登录 */
export const outLogin = async () => {
  await request.post<Result<null>>(`${AIP_FIX}/outlogin`).then(() => {
    localStorage.removeItem(TOKEN_COOKIE_KEY);
  });
};

/** 文件上传 */
export const uploadFile = async (
  file: File,
  options?: { onUploadProgress?: (p: AxiosProgressEvent) => void },
) => {
  const formData = new FormData();
  formData.append('file', file);
  return await request.post<Result<string>>(`${AIP_FIX}/upload`, formData, {
    onUploadProgress: options?.onUploadProgress,
  });
};

/** 发送手机号验证码 */
export const sendSmsCode = async (phone: string) => {
  return await request.post<Result<void>>(`${AIP_FIX}/user/send-code`, { phone });
};

/** 发送邮箱验证码 */
export const sendEmailCode = async (email: string) => {
  return await request.post<Result<void>>(`${AIP_FIX}/send-validate-code/forget-password`, { email });
};
