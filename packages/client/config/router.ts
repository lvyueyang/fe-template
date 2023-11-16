// import { FundFilled } from '@ant-design/icons';

const router = {
  routes: [
    // { path: '/login', component: 'login' },
    { path: '/', component: 'home' },
    // { path: '/', redirect: '/user-admin/user-list' },
    // {
    //   path: '/',
    //   component: '@/layouts/main',
    //   routes: [
    //     {
    //       path: '/userinfo',
    //       component: 'userinfo',
    //       title: '用户信息',
    //       menuHide: true,
    //     },
    //     {
    //       path: '/user-admin',
    //       title: '后台账户管理',
    //       routes: [
    //         {
    //           path: '/user-admin/user-list',
    //           component: 'user-admin',
    //           title: '用户列表',
    //         },
    //         {
    //           path: '/user-admin/role-list',
    //           component: 'adminRole',
    //           title: '角色管理',
    //         },
    //       ],
    //     },
    //     {
    //       path: '/logger',
    //       component: 'logger',
    //       title: '系统日志',
    //     },

    //     {
    //       path: '/open-token',
    //       title: 'Token 管理',
    //       component: 'open-token',
    //     },

    //     {
    //       path: '/system-config',
    //       title: '系统配置',
    //       component: 'system-config',
    //     },

    //     {
    //       path: '/bi-fd',
    //       title: '财务报表',
    //       routes: [
    //         {
    //           path: '/bi-fd/list',
    //           component: 'bi-fd',
    //           title: '列表',
    //         },
    //         {
    //           path: '/bi-fd/config',
    //           component: 'bi-fd/config',
    //           title: '基础配置',
    //         },
    //         {
    //           path: '/bi-fd/relation',
    //           component: 'bi-fd/relation',
    //           title: '映射关系配置',
    //         },
    //       ],
    //     },

    //     {
    //       path: '/bi-pur',
    //       title: '采购报表',
    //       routes: [
    //         {
    //           path: '/bi-pur/list',
    //           component: 'bi-pur',
    //           title: '列表',
    //         },
    //       ],
    //     },

    //     {
    //       path: '/tools',
    //       title: '开发工具',
    //       routes: [
    //         {
    //           path: '/tools/list',
    //           component: 'tools',
    //           title: '工具列表',
    //         },
    //       ],
    //     },

    //     // {
    //     //   path: '/news',
    //     //   component: 'news',
    //     //   title: '新闻管理',
    //     // },
    //     // {
    //     //   path: '/news/create',
    //     //   component: 'news/form',
    //     //   title: '新增新闻',
    //     //   menuHide: true,
    //     // },
    //     // {
    //     //   path: '/news/update/:id',
    //     //   component: 'news/form',
    //     //   title: '修改新闻',
    //     //   menuHide: true,
    //     // },
    //   ],
    // },
    { path: '*', component: '404' },
  ],
};
export default router;
