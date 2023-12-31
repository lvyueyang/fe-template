/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserAdminLoginBody {
  /** 密码 */
  password: string;
  /** 用户名/邮箱 */
  username: string;
}

export interface UserAdminLoginResponse {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: {
    token: string;
  };
}

export interface UserAdminOutLoginResponse {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
}

export interface AdminRole {
  id: number;
  name: string;
  desc?: string;
  permission_code?: string[];
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
}

export interface UserAdminInfo {
  id: number;
  username: string;
  password: string;
  cname: string;
  email: string;
  is_root?: boolean;
  /** @format date-time */
  out_login_date?: string;
  roles: AdminRole[];
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
}

export interface UserAdminList {
  list: UserAdminInfo[];
  total: number;
}

export interface UserAdminListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: UserAdminList;
}

export interface UserAdminCreateDto {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 昵称 */
  cname: string;
  /** 邮箱 */
  email: string;
}

export interface UserAdminIdResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  /** 用户 ID */
  data: number;
}

export interface UserAdminInfoResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: UserAdminInfo;
}

export interface UserAdminUpdateDto {
  /** 昵称 */
  cname: string;
}

export interface UserAdminUpdatePasswordDto {
  /** 密码 */
  password: string;
}

export interface UserAdminUpdateRolesDto {
  /** 角色 ID */
  roles: number[];
}

export interface ResponseResult {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
}

export interface UserAdminForgetPasswordDto {
  /** 邮箱 */
  email: string;
  /** 验证码 */
  code: string;
  /** 密码 */
  password: string;
}

export interface UserAdminFileUploadDto {
  /** @format binary */
  file: File;
}

export interface UserAdminCreateRootDto {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 昵称 */
  cname: string;
  /** 邮箱 */
  email: string;
}

export interface AdminRoleCreateDto {
  /** 角色名称 */
  name: string;
  /** 角色描述 */
  desc?: string;
}

export interface AdminRoleIdResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  /** 角色 ID */
  data: number;
}

export interface AdminRoleInfo {
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
  id: number;
  name: string;
  desc?: string;
  permission_code?: string[];
}

export interface AdminRoleList {
  list: AdminRoleInfo[];
  total: number;
}

export interface AdminRoleListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: AdminRoleList;
}

export interface CodeInfo {
  code: string;
  cname: string;
  groupName?: string;
}

export interface AdminPermissionCodeListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: CodeInfo[];
}

export interface AdminRoleInfoResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  /** 角色详情 */
  data: AdminRoleInfo;
}

export interface AdminRoleUpdateDto {
  /** 角色名称 */
  name: string;
  /** 角色描述 */
  desc?: string;
}

export interface AdminRoleUpdatePermissionCodeDto {
  /** 权限码 */
  codes: string[];
}

export interface EmailValidateCodeCreateDto {
  /** 邮箱 */
  email: string;
}

export interface ImageValidateCodeResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: {
    data: string;
    hash: string;
  };
}

export interface LoggerListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  /** 日志列表 */
  data: string[];
}

export interface LoggerDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  /** 日志详情 */
  data: string[];
}

export interface NewsQueryListDto {
  /**
   * 分页查询-当前页
   * @default 1
   */
  current?: number;
  /**
   * 分页查询-每页数量
   * @default 10
   */
  page_size?: number;
  /**
   * 被排序的字段
   * @default "create_at"
   */
  order_key?: string;
  /**
   * 排序方式 DESC 降序 ASC 倒序
   * @default 10
   */
  order_type?: string;
  /** 新闻中心名称-模糊搜索 */
  keyword?: string;
}

export interface UserAdmin {
  id: number;
  username: string;
  password: string;
  cname: string;
  email: string;
  is_root?: boolean;
  /** @format date-time */
  out_login_date?: string;
  roles: AdminRole[];
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
}

export interface NewsInfo {
  /** 是否为推荐, 0 为不推荐, 后续可根据值大小进行排序 */
  recommend: number;
  id: number;
  title: string;
  cover?: string;
  desc?: string;
  content: string;
  is_delete: boolean;
  /** @format date-time */
  push_date?: string;
  authorId?: number;
  author: UserAdmin;
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
}

export interface NewsList {
  list: NewsInfo[];
  total: number;
}

export interface NewsListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: NewsList;
}

export interface NewsDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: NewsInfo;
}

export interface NewsCreateDto {
  /**
   * 新闻中心名称
   * @maxLength 255
   */
  title: string;
  /**
   * 新闻中心描述
   * @maxLength 255
   */
  desc?: string;
  /** 新闻中心封面 */
  cover?: string;
  /** 新闻中心详情 */
  content: string;
  /**
   * 发布时间
   * @format date-time
   */
  push_date: string;
  /**
   * 推荐等级, 0 为不推荐
   * @min 0
   */
  recommend: number;
}

export interface NewsUpdateDto {
  /**
   * 新闻中心名称
   * @maxLength 255
   */
  title: string;
  /**
   * 新闻中心描述
   * @maxLength 255
   */
  desc?: string;
  /** 新闻中心封面 */
  cover?: string;
  /** 新闻中心详情 */
  content: string;
  /**
   * 发布时间
   * @format date-time
   */
  push_date: string;
  /**
   * 推荐等级, 0 为不推荐
   * @min 0
   */
  recommend: number;
}

export interface NewsDetailIdResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: number;
}

export interface OAConfig {
  OA_URL: string;
  userName: string;
  password: string;
  loginName: string;
}

export interface OAConfigDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: OAConfig;
}

export interface OAConfigUpdateDto {
  /** OA 地址 */
  OA_URL: string;
  /** rest 用户密码 */
  password: string;
  /** rest 用户名 */
  userName: string;
  /** OA 用户登录名 */
  loginName: string;
}

export interface NullResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
}

export interface NCCDataEncryptBodyDto {
  /** 被加密的数据 */
  data: string;
  /** crux 请求header中的 crux */
  crux: string;
  /** cowboy localStorage 中的 cowboy */
  cowboy: string;
  /** 是否解压缩 */
  gzipFlag: boolean;
  /** 是否加密 */
  cipherFlag: boolean;
}

export interface NCCConfig {
  NCC_URL: string;
  userCode: string;
  userPWD: string;
  cookies: string;
  cowboy: string;
}

export interface NCCConfigDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: NCCConfig;
}

export interface NCCConfigUpdateDto {
  /** NCC 地址 */
  NCC_URL: string;
  /** 用户名 */
  userCode: string;
  /** 密码 */
  userPWD: string;
  /** Cookies */
  cookies: string;
  /** cowboy */
  cowboy: string;
}

export interface NCCConfigCookieUpdateDto {
  /** Cookies */
  cookies: string;
  /** cowboy */
  cowboy: string;
}

export interface OpenTokenInfo {
  id: number;
  name: string;
  token: string;
  /** @format date-time */
  expires_date: string;
  userId?: number;
  user: UserAdmin;
  /** @format date-time */
  create_date: string;
  /** @format date-time */
  update_date: string;
}

export interface OpenTokenListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: OpenTokenInfo[];
}

export interface OpenTokenCreateDto {
  /** Token 名称 */
  name: string;
  /** 有效时长 (分钟)，不传为永久有效 */
  valid_total?: number;
}

export interface OpenTokenDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: OpenTokenInfo;
}

export interface BiFdAssbalanceDataSequencebookArchivedataUpdateDto {
  /** YYYY-MM */
  date: object;
}

export interface DataItem {
  api: string;
  label: string;
}

export interface BiFdListResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: DataItem[];
}

export interface FormConfig {
  /** 表单的 formId */
  formId: string;
  /** 表单的 formTemplateId */
  formTemplateId: string;
}

export interface AssbalanceConfigFormConfig {
  /** 应用 ID */
  appcode: string;
  /** 核算账簿 */
  pk_glorgbooks: string[];
}

export interface SequencebooksConfigFormConfig {
  /** 应用 ID */
  appcode: string;
  /** 核算账簿 */
  pk_accountingbook: string[];
}

export interface BiFdCommonConfigInfo {
  /** 项目台账配置信息 */
  projectLedgerConfig: FormConfig;
  /** 合同台账配置信息 */
  contractLedgerConfig: FormConfig;
  /** 辅助余额表 */
  assbalanceConfig: AssbalanceConfigFormConfig;
  /** 序时账 */
  sequencebooksConfig: SequencebooksConfigFormConfig;
}

export interface BiFdCommonConfigDetailResponseDto {
  /**
   * 状态码
   * @default 200
   */
  code: number;
  /**
   * 状态描述
   * @default "请求成功"
   */
  message: string;
  data: BiFdCommonConfigInfo;
}

export interface BiFdCommonConfigUpdateDto {
  /** 项目台账配置信息 */
  projectLedgerConfig: FormConfig;
  /** 合同台账配置信息 */
  contractLedgerConfig: FormConfig;
  /** 辅助余额表 */
  assbalanceConfig: AssbalanceConfigFormConfig;
  /** 序时账 */
  sequencebooksConfig: SequencebooksConfigFormConfig;
}

export interface FileUploadDto {
  /** @format binary */
  file: File;
}
