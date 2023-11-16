import { TOKEN_COOKIE_KEY } from '@/constants';
import { notification } from '@/utils/notice';
import axios, { type AxiosRequestConfig } from 'axios';
import { history } from 'umi';
import workConfig from '../../../../work.config.json';

export interface CustomConfig extends AxiosRequestConfig {
  // 请求错误时不弹出错误提示
  ignoreNotice?: boolean;
  // 身份过期不跳转登录页
  ignoreLogin?: boolean;
}

const request = axios.create({
  baseURL: '/',
});

const ignoreLoginPaths = ['/login', '/_init_root_user', '/nopassword'].map(
  (p) => `/${workConfig.cms_admin_path}${p}`,
);

/** 请求拦截 */
request.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_COOKIE_KEY);
  if (token) {
    config.headers.set('token', token);
  }
  return config;
});

/** 响应拦截 */
request.interceptors.response.use(
  async (response) => {
    return await Promise.resolve(response);
  },
  async (error) => {
    const response = error.response || {};
    const config = response.config as CustomConfig;
    const data = response.data || {};

    // 忽略身份过期重定向
    if (data.statusCode !== 200) {
      // 是否忽略错误提示
      if (!config.ignoreNotice) {
        notification.error({ message: data.message });
      }
      // 是否忽略身份过期跳转登录页
      if (
        !config.ignoreLogin &&
        data.statusCode === 401 &&
        !ignoreLoginPaths.includes(history.location.pathname)
      ) {
        history.push('/login');
      }
    }
    return await Promise.reject(error);
  },
);

class Request {
  async get<T>(url: string, config?: CustomConfig) {
    return await request.get<T>(url, config);
  }

  async post<T>(url: string, data?: Record<string, any>, config?: CustomConfig) {
    return await request.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: Record<string, any>, config?: CustomConfig) {
    return await request.put<T>(url, data, config);
  }

  async delete<T>(url: string, config?: CustomConfig) {
    return await request.delete<T>(url, config);
  }
}

export async function awaitRequest<T, E = any>(
  promiseFn: () => Promise<any>,
): Promise<[E | null, T | null]> {
  try {
    const result = await promiseFn();
    return [null, result];
  } catch (err: any) {
    return [err, null];
  }
}

export default new Request();
